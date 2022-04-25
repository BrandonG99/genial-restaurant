import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$53',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$57',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$46',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$33',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$25',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$21',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$17',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$11',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$34',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$29',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Best NY Restaurants',
    subtitle: "#1 Best Fine Dining Restaurant in NY, 2022.",
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Awarded During Our 1st Year Of Service.',
  },
  // {
  //   imgUrl: images.award02,
  //   title: 'Top Hospitality',
  //   subtitle: '2 Top Hospitality Awards (2021, 2022)',
  // },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Outstanding Chef Award For Three Consecutive Years: 2019, 2020, 2021.',
  },
];

export default { wines, cocktails, awards };
