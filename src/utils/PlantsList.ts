export interface IPlant {
  id: number
  image: string
  desc: string
  hot: boolean
  sale: {
    isSaled: boolean
    value: number
  }
  price: number
}

export const PlantsList:IPlant[] = [
  {
    id: 1,
    image: '/images/plant01.jpg',
    desc: 'Sit voluptatem',
    hot: false,
    sale: {
      isSaled: false,
      value: 0
    },
    price: 68
  },
  {
    id: 2,
    image: '/images/plant02.jpg',
    desc: 'Neque Porro Quisquamest',
    hot: true,
    sale: {
      isSaled: false,
      value: 0
    },
    price: 60.50
  },
  {
    id: 3,
    image: '/images/plant03.jpg',
    desc: 'Pellentesque aliquet',
    hot: false,
    sale: {
      isSaled: false,
      value: 0
    },
    price: 68
  },
  {
    id: 4,
    image: '/images/plant04.jpg',
    desc: 'Aspetur Autodit Autfugit',
    hot: false,
    sale: {
      isSaled: true,
      value: 0.82
    },
    price: 80
  },
  {
    id: 5,
    image: '/images/plant05.jpg',
    desc: 'Sit voluptatem',
    hot: false,
    sale: {
      isSaled: false,
      value: 0
    },
    price: 70.50
  },
  {
    id: 6,
    image: '/images/plant06.jpg',
    desc: 'Sint Incidunt Utlabore',
    hot: true,
    sale: {
      isSaled: true,
      value: 0.8
    },
    price: 75
  },
  {
    id: 7,
    image: '/images/plant07.jpg',
    desc: 'Aliquam Quaerat Voluptem',
    hot: false,
    sale: {
      isSaled: false,
      value: 0
    },
    price: 58
  },
  {
    id: 8,
    image: '/images/plant08.jpg',
    desc: 'Neque Porro Quisquam',
    hot: false,
    sale: {
      isSaled: true,
      value: 0.8
    },
    price: 60
  },
  {
    id: 9,
    image: '/images/plant09.jpg',
    desc: 'Sit voluptatem',
    hot: false,
    sale: {
      isSaled: false,
      value: 0
    },
    price: 65
  },
  {
    id:10,
    image: '/images/plant10.jpg',
    desc: 'Aliquam Quaerat Voluptatem',
    hot: true,
    sale: {
      isSaled: false,
      value: 0
    },
    price: 80
  },
]
