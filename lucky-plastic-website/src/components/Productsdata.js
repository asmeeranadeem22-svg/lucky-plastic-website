/* =========================================================
   PRODUCT DATA  (Lucky Plastic price lists)
   Row format:  Name|Code|Price|CartonPacking
========================================================= */

const LISTS = [
  {
    id: "inj", title: "Injection Moulding", date: "07-03-2026", unit: "pc",
    items: `Small Spoon|60|1.20|9000
Medium Spoon|61|1.45|3000
Large Spoon|62/64|1.80|3000
Extra Large Spoon|63/65|3.10|3000
Tea Spoon|66|1.45|3000
Sundae Spoon|67|3.90|6000
Dessert Spoon Crystal|68|3.10|3000
Dessert Spoon Colour|68|2.90|3000
Coffee Spoon|69|1.35|3000
Ice Cream Stick|70|1.50|9000
Ice Cream Spoon|71|1.55|9000
Table Spoon|72|2.90|9000
Fork|73|2.80|3000
Salad Fork|74|3.75|3000
Spork|75|3.90|3000
Fork (Small)|76|1.50|3000
Knife|77|1.50|3000
SandBlast Small Spoon|78|3.80|3000
SandBlast Large Spoon|79|6.30|3000
SandBlast Fork|80|6.30|3000
SandBlast Knife|81|6.00|3000
Stirrer Spoon|82|1.65|3000
Stirrer Stick S|83|1.15|5000
Stirrer Stick L|84|1.90|9000
Premium Spoon|85|5.00|9000
Premium Fork|86|6.40|2000
Premium Knife|87|5.00|2000
Ice Cream Stick Medium|88|1.90|3000
Ice Cream Stick Large|89|2.50|5000
B & R Taster Spoon|90|1.75|7000
B & R Sundae Spoon|91|3.60|3000
B & R Soda Spoon|92|5.20|3000
Crystal Jug||150|60
Crystal Plate Small||36|240
Crystal Plate Large||46|240
Crystal Glass 8 Oz||15.50|500
PP Round Dip Pot P-1||2.30|2500
PP Round Dip Pot P-2||3.40|1500
PP Round Container 10 Oz||13.25|500
PP Round Container 16 Oz||14.25|500
PP Container 500ml||18.50|250
PP Container 1000ml||20.50|250
PP Container 1500ml||31.00|150
PP Container 2000ml||46.00|150
PP Container 3000ml||56.00|150
EPS Cup 6 Oz||4.50|1000
EPS Cup 8 Oz||4.60|1000
EPS Cup 12 Oz||11.00|1000`,
  },
  {
    id: "vf", title: "V.Forming", date: "07-03-2026", unit: "pc",
    items: `C-189||22.00|200
C-228||17.50|200
C-229||11.50|200
C-247||16.50|200
C-301/C-35||16.50|200
C-302/H18L||16.00|150
C-303/C-168||16.50|200
C-304/C-45||13.00|200
C-305/H16L||11.00|200
Egg Tray Half Dozen||8.00|500
Egg Tray Dozen||17.00|300
Meat Tray C-324||5.60|500
Meat Tray C-325||8.60|500
Ketchup Tray||1.00|12000
PET Plate Small||3.50|1000
PET Plate Medium||4.80|1000
PET Plate Large||5.80|1000
PET Plate Extra Large||7.50|800
Sandwich Box SE-10||6.30|500
Burger Box C-10||6.30|900
S-13||6.40|600
C-179/P3||11.50|400
PET Glass 12 Oz Diamond||5.80|1000
PET Glass 16 Oz Diamond||6.80|1000
Doom Lid Diamond||2.00|2000`,
  },
  {
    id: "pet", title: "PET A Grade", date: "07-03-2026", unit: "pc",
    items: `PET Glass 8 Oz||4.60|2000
Flate Lid for 8 Oz Glass||2.70|2000
PET Glass 10 Oz||8.50|1000
PET Glass 12 Oz||8.60|1000
PET Glass 16 Oz||9.80|1000
PET Glass 22 Oz||12.50|1000
Doom Lid||3.00|1000`,
  },
  {
    id: "hips", title: "HIPS", date: "07-03-2026", unit: "pc",
    items: `HIPS Plate Small||4.45|1000
HIPS Plate Medium||6.55|1000
HIPS Plate Large||8.80|1000
HIPS Plate Extra Large||11.85|800
HIPS Coffee Lid 8 oz||2.10|2000
HIPS Coffee Lid 12 oz||3.50|2000
HIPS Three Portion Plate||13.00|500
Flate Lid 150/180/200ml||1.25|2000
Flate Lid 12/16 Ring/Relax Time||1.25|2000`,
  },
  {
    id: "pp", title: "PP", date: "07-03-2026", unit: "pc",
    items: `PP Glass 210ml Crystal||1.50|2000
PP Glass 210ml Printed||1.60|2000
PP Glass 250ml Crystal||2.00|2000
PP Glass 250ml Printed||2.10|2000
PP Ring Glass 12 Oz||3.20|2000
PP Ring Glass 16 Oz||3.30|2000
PP Glass Relax Time 14 Oz||6.20|1000
PP Bowl 180ml||3.00|2000
PP Bowl 200ml||3.10|2000
PP Bowl 350ml C||10.00|1000
PP Bowl 400ml C||12.00|1000`,
  },
  {
    id: "cling", title: "Cling Film", date: "07-03-2026", unit: "roll",
    items: `Cling Film 30cm · 450 g||160|
Cling Film 30cm · 800 g||480|
Cling Film 30cm · 1000 g||610|
Cling Film 30cm · 1300 g||900|
Cling Film 45cm · 700 g||285|
Cling Film 45cm · 1000 g||530|
Cling Film 45cm · 1200 g||750|
Cling Film 45cm · 1400 g||920|`,
  },
  {
    id: "dia", title: "Diamond", date: "01-07-2026", unit: "pc",
    items: `Prawn Tray|LPI-01|4.43|600
Sweet Tray|LPI-04|3.28|400
Date Tray|LPI-08|5.13|600
Burger Box (L)|LPI-09|7.25|200
Burger Box (S)|LPI-11|5.85|200
Plate (Medium)|LPI-14|3.47|300
Plate (Large)|LPI-15|5.13|300
Meat Tray (S)|LPI-17|7.60|300
Soup Bowl (L)|LPI-18|3.20|300
Bar B.Q Box|LPI-19|13.10|200
Biryani Box Single Lock|LPI-22|9.86|150
Biryani Box Double Lock|LPI-24|10.37|150
Soup Bowl (S)|LPI-38|3.00|200`,
  },
  {
    id: "ppak", title: "P-Pak", date: "07-03-2026", unit: "pc",
    items: `Prawn Tray|LPI-01|4.70|600
Meat Tray|LPI-02|18.58|200
Meat Tray Medium|LPI-03|7.65|200
Sweet Tray|LPI-04|4.70|400
Pizza Box Small|LPI-05|22.60|150
Pizza Box Large|LPI-06|40.25|100
Square Tray|LPI-07|10.70|300
Date Tray|LPI-08|5.70|600
Burger Box Large|LPI-09|9.15|200
Burger Box Small|LPI-11|7.30|200
Egg Tray Dozen|LPI-12|16.30|100
Plate Medium|LPI-14|3.70|300
Plate Large|LPI-15|5.35|300
Egg Tray Half Dozen|LPI-16|9.90|300
Meat Tray Small|LPI-17|8.60|300
Soup Bowl|LPI-18|3.65|300
Bar B.Q Box|LPI-19|17.05|100
Three Portion Box|LPI-21|19.50|100
Biryani Box (S)|LPI-22|11.10|150
Biryani Box (L)|LPI-24|12.17|150
Hot Dog Box|LPI-26|9.55|200
Meat Tray (Large)|LPI-31|12.25|200
Four Portion Tray|LPI-35|16.35|100
Soup Bowl (Medium)|LPI-38|3.18|200
Plate Small|LPI-42|4.08|300
Four Portion Tray (L)|LPI-51|24.60|150
Carry Tray|LPI-53|35.25|100
Soup Bowl (Large)|LPI-55|6.55|200`,
  },
];

/* =========================================================
   PRODUCT PHOTOS
   Add real photos here by product name. Any product without
   a photo automatically shows its illustration instead.
   Example:
     "Small Spoon": "/images/spoon.jpeg",
     "Prawn Tray": "/images/prawn-tray.jpeg",
========================================================= */

export const productImages = {
  // "Small Spoon": "/images/spoon.jpeg",
};

const parse = (l) => ({
  ...l,
  items: l.items.split("\n").map((row, i) => {
    const [name, code, price, pack] = row.split("|");
    return {
      id: l.id + "-" + i,
      name,
      code,
      price: parseFloat(price),
      pack: pack ? parseInt(pack, 10) : 0,
      unit: l.unit,
      image: productImages[name] || null,
    };
  }),
});

export const categories = LISTS.map(parse);

/* =========================================================
   ILLUSTRATIONS (used when a product has no photo)
========================================================= */

export const ICONS={
spoon:'<path fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M28 30h8l-1.5 28q-2.5 3-5 0z"/><ellipse fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" cx="32" cy="17" rx="13" ry="15"/><ellipse fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" cx="32" cy="18" rx="8" ry="10" opacity=".55"/>',
fork:'<path fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M28 30h8l-1.5 28q-2.5 3-5 0z"/><path fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M19 4h5v15h4V4h8v15h4V4h5v19q0 9-13 9T19 23z"/>',
knife:'<path fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M25 34h14l-1.5 24q-5.5 3-11 0z"/><path fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M25 4q18 4 14 30H25z"/><path d="M30 12q5 6 3 18" fill="none" stroke="#86efac" stroke-width="2"/>',
stick:'<rect fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" x="24" y="3" width="16" height="58" rx="8"/><path d="M29 10v40" stroke="#86efac" stroke-width="3" stroke-linecap="round"/>',
plate:'<circle fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" cx="32" cy="32" r="28"/><circle fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" cx="32" cy="32" r="19" opacity=".6"/><circle cx="32" cy="32" r="19" fill="none" stroke="#15803d" stroke-width="1.2"/>',
cup:'<path fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M13 8h38l-5 50q-.5 4-4.5 4h-19q-4 0-4.5-4z"/><ellipse fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" cx="32" cy="8" rx="19" ry="3.5"/><path d="M20 18l3 38" stroke="#86efac" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M15 26h34" stroke="#86efac" stroke-width="1.5"/>',
bowl:'<path fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M4 26h56q-1 26-28 29Q5 52 4 26z"/><ellipse fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" cx="32" cy="26" rx="28" ry="5.5"/><rect fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" x="22" y="54" width="20" height="5" rx="2"/>',
box:'<path fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M5 34h54v19q0 4-4 4H9q-4 0-4-4z"/><path fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M5 34l4-19q1-5 6-5h34q5 0 6 5l4 19z"/><rect fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" x="27" y="31" width="10" height="7" rx="2"/>',
tray:'<path fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M3 22h58l-6 33H9z"/><path fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M13 29h38l-3 19H16z" opacity=".7"/><path d="M32 29v19" stroke="#15803d" stroke-width="1.2"/>',
lid:'<path fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M5 42Q5 13 32 13t27 29z"/><ellipse fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" cx="32" cy="43" rx="29" ry="6"/><path d="M15 34q3-11 14-14" stroke="#86efac" stroke-width="3" stroke-linecap="round" fill="none"/>',
roll:'<path fill="#f0fdf4" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" d="M7 16v34q0 9 25 9t25-9V16z"/><ellipse fill="#bbf7d0" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round" cx="32" cy="16" rx="25" ry="8"/><ellipse cx="32" cy="16" rx="8" ry="3" fill="#ffffff" stroke="#15803d" stroke-width="1.2"/><path d="M14 30v22" stroke="#86efac" stroke-width="3" stroke-linecap="round"/>'};

export function kind(n){n=n.toLowerCase();
if(/film/.test(n))return'roll';if(/lid/.test(n))return'lid';if(/knife/.test(n))return'knife';
if(/fork|spork/.test(n))return'fork';if(/stick|stirrer stick/.test(n))return'stick';if(/spoon/.test(n))return'spoon';
if(/plate/.test(n))return'plate';if(/glass|cup|jug/.test(n))return'cup';if(/bowl|pot|container/.test(n))return'bowl';
if(/box|sandwich|burger|^s-|c-179/.test(n))return'box';return'tray'}