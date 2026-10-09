import { Link } from "react-router-dom";
import { useCart } from "./Cartcontext";
import { ICONS, kind } from "./Productsdata";

const fmt = (n) =>
  "Rs " +
  n.toLocaleString("en-PK", {
    minimumFractionDigits: n % 1 ? 2 : 0,
    maximumFractionDigits: 2,
  });

function Thumb({ item }) {
  return (
    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-green-50">
      {item.image ? (
        <img src={item.image} alt={item.name} className="h-full w-full object-contain p-2" />
      ) : (
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className="h-16 w-16"
          dangerouslySetInnerHTML={{ __html: ICONS[kind(item.name)] }}
        />
      )}
    </div>
  );
}

function Cart() {
  const { items, increase, decrease, remove, clear, count, total, hasUnpriced } = useCart();

  return (
    <main className="min-h-[70vh] bg-[#f7f8f6] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Your Selection
        </span>

        <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
          Shopping <span className="text-green-700">Cart</span>
        </h1>

        {items.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-green-200 bg-white p-12 text-center">
            <p className="text-lg font-semibold text-gray-900">Your cart is empty</p>
            <p className="mt-2 text-gray-500">Add products to see them here.</p>
            <Link
              to="/products"
              className="mt-6 inline-flex rounded-full bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              Browse Products &rarr;
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Items */}
            <div className="space-y-5 lg:col-span-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                >
                  <Thumb item={item} />

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    {item.code && (
                      <span className="mt-1 inline-block rounded-full bg-green-50 px-3 py-0.5 text-xs font-bold text-green-700">
                        {item.code}
                      </span>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      {item.unitPrice == null
                        ? `Price on request${item.pack > 0 ? ` · ${item.pack.toLocaleString()} pcs per carton` : ""}`
                        : item.pack > 0
                        ? `${fmt(item.unitPrice)} per carton (${item.pack.toLocaleString()} pcs)`
                        : `${fmt(item.unitPrice)} per ${item.unit}`}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                    <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 p-1">
                      <button
                        type="button"
                        onClick={() => decrease(item.id)}
                        aria-label="Decrease quantity"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-green-700 transition hover:bg-green-700 hover:text-white"
                      >
                        &minus;
                      </button>
                      <span className="w-8 text-center font-bold text-green-800">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => increase(item.id)}
                        aria-label="Increase quantity"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-green-700 transition hover:bg-green-700 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-xl font-bold text-green-700">
                      {item.unitPrice == null ? "On request" : fmt(item.qty * item.unitPrice)}
                    </p>

                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      className="text-sm font-semibold text-gray-500 transition hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <aside className="h-fit rounded-3xl bg-green-700 p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold">Order Summary</h2>

              <dl className="mt-6 space-y-3 text-green-50">
                <div className="flex justify-between">
                  <dt>Products</dt>
                  <dd className="font-semibold">{items.length}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Total quantity</dt>
                  <dd className="font-semibold">{count}</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-end justify-between border-t border-white/20 pt-6">
                <span>Estimated total</span>
                <span className="text-3xl font-bold">{fmt(total)}</span>
              </div>

              <p className="mt-3 text-xs text-green-100">
                Quantities are in cartons (rolls for cling film).
                {hasUnpriced && " The total does not include items marked “Price on request”."}{" "}
                Final rates are confirmed in the quotation.
              </p>

              <Link
                to="/contact"
                className="mt-6 block rounded-full bg-white px-6 py-4 text-center font-bold text-green-800 transition hover:bg-green-50"
              >
                Request a Quote &rarr;
              </Link>

              <button
                type="button"
                onClick={clear}
                className="mt-3 w-full rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;