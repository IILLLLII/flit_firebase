const user1 = 'https://bit.ly/dan-abramov';
const user2 = 'https://bit.ly/kent-c-dodds';
const user3 = 'https://bit.ly/code-beast';
const user4 = 'https://bit.ly/prosper-baba';
const user5 = 'https://bit.ly/ryan-florence';
const user6 = 'https://bit.ly/tioluwani-kolawole';
const user7 = 'https://bit.ly/sage-adebayo';

const flower1 = 'https://i.pinimg.com/564x/38/42/75/384275e1e7ede8b19ab12409092ba921.jpg';
const flower2 = 'https://i.pinimg.com/564x/72/1b/28/721b282c73c060f0052c6f743b251ba7.jpg';
const flower3 = 'https://i.pinimg.com/564x/45/dc/7f/45dc7fdc4b91a2c618228d5a5cabd688.jpg';
const flower4 = 'https://i.pinimg.com/564x/2e/83/47/2e8347ca67f9e1b4eeff5b12cc1f0a90.jpg';
const flower5 = 'https://i.pinimg.com/564x/1a/1a/53/1a1a53b34cbaa143554421cf710f9854.jpg';
const flower6 = 'https://i.pinimg.com/564x/04/75/57/0475576a63dd1791e59ae14258715431.jpg';

export const submitData = {
  image: user1,
  shop: '무',
  name: '아미화',
  birth: '1990-04-05',
  gender: '여',
  phone: '010-0000-0000',
  mail: 'illi@illi.kr',
  addr: '서울특별시 노원구 동일로 174길 27',
  addr_detail: 'O층 OOO호',
  career: '-OO샵 1년\n-OO플라워 3년',
  url: '(instagram) Amiwha',
  business: null,
  portfolio: null,
}

export const shopInfo = {
  username: localStorage.getItem('username'),
  password: localStorage.getItem('password'),
  shopName: '아미화',
  name: '전미화',
  number: '010-0000-0000',
  nickname: 'sm101',
  profileImage: user1,
  mainAddress: '플릿시 플릿구 플릿동',
  detailAddress: '플릿빌딩 101동 1001호',
  email: 'illi@illi.kr',
  facebook: '',
  twitter: '',
  instagram: 'flit',
  category: ['플랜테리어(실내조경)', '가드닝(실외조경)'],
  content: '안녕하세요.\n아미화입니다.\n좋은 품질과 서비스를 제공해드리겠습니다.',
  operate_s_time: '09:00',
  operate_e_time: '18:00',
  operate_weekend_s_time: '10:00',
  operate_weekend_e_time: '15:00',
  reserve_s_time: '09:00',
  reserve_e_time: '18:00',
  reserve_weekend_s_time: '10:00',
  reserve_weekend_e_time: '15:00',
  break_s_time: '12:00',
  break_e_time: '13:00',
  break_weekend_s_time: '12:00',
  break_weekend_e_time: '13:00',
  closed: ['토', '일'],
  delivery: ['픽업'],
  type: 'Shop',
  registerDate: '2022-10-11',
  grade: 'Flinney'
}

export const goodsData = [
  {
    profile: user2,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user3,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user4,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user5,
    grade: 'Green',
    name: '이남남'
  },
]

export const reviewData = [
  {
    shop: {
      profile: user1,
      name: '아미화'
    },
    user: {
      profile: user2,
      name: '이남남'
    },
    date: '2023.01.15',
    images: [flower1, flower2, flower3, flower4, flower5, flower6],
    comment: 'adfpoajpojoj dokfoajeiojin djeiji djsi diajioweiwruoq\n'
      + 'asdlfkkoeko wiufajcm ododo eow djdiajcijso\n'
      + 'co eiaksk cciaheic kdkkq ddkkkscbdhu.',
    reply: [{
      user: {
        profile: user1,
        name: '아미화'
      },
      date: '2023.01.15',
      comment: 'adfpoajpojoj dokfoajeiojin djeiji djsi diajioweiwruoq\n'
        + 'asdlfkkoeko wiufajcm ododo eow djdiajcijso\n'
        + 'co eiaksk cciaheic kdkkq ddkkkscbdhu.',
    }]

  },
  {
    shop: {
      profile: user1,
      name: '아미화'
    },
    user: {
      profile: user2,
      name: '이남남'
    },
    date: '2023.01.15',
    images: [flower1, flower2, flower3, flower4, flower5],
    comment: 'adfpoajpojoj dokfoajeiojin djeiji djsi diajioweiwruoq\n'
      + 'asdlfkkoeko wiufajcm ododo eow djdiajcijso\n'
      + 'co eiaksk cciaheic kdkkq ddkkkscbdhu.',
    reply: [{
      user: {
        profile: user1,
        name: '아미화'
      },
      date: '2023.01.15',
      comment: 'adfpoajpojoj dokfoajeiojin djeiji djsi diajioweiwruoq\n'
        + 'asdlfkkoeko wiufajcm ododo eow djdiajcijso\n'
        + 'co eiaksk cciaheic kdkkq ddkkkscbdhu.',
    }]

  }
]

export const productInfo = {
  id: 0,
  date: '2023.01.07',
  state: '판매중',
  product_image: flower1,
  product_name: '장미안개 꽃다발',
  main_image: flower1,
  images: [flower2, flower3, flower4, flower5, flower6],
  start_date: '2023-01-07',
  end_date: '2023-01-31',
  discount_rate: '10',
  cost: 20000,
  sale_cost: 60000,
  discount_cost: 54000,
  is_discount: false,
  is_discount_date_range: false,
  sale_start_date: '2023-01-07',
  sale_end_date: '2023-01-31',
  goods: 108,
  review: 20,
  remain: 10,
  total: 20,
  comment: "핑크 튤립 + 안개 꽃의 조합입니다🌸\n사진은 보정하지 않습니다.\n꽃 컬러가 너무 예뻐요:)",
  barogo: true,
  delivery: true,
  pickup: true,
  category1: '꽃',
  category2: '꽃다발',
  tag: ['튤립', '분홍튤립', '꽃다발', '기념일'],
  colorChip: ['#FF0000', '#FF5001', '#FFB800'],
  purchase_point: '10%',
  review_point: '10%',
  taxType: 0,
  options: [
    { name: '빨간 장미 1송이', cost: '3000원' },
    { name: '안개꽃 한다발', cost: '7000원' }
  ],
  goodsInfo: goodsData,
  reviewInfo: reviewData,
  is_purchase: false,
  is_review: false,
}

export const orderInfo =
  {
    id: 0,
    time: '9:00 am',
    new: 1,
    order_type: 0,
    order_number: '12305568',
    order_date: '2023.00.00',
    order_time: '01:00 pm',
    order_state: '준비중',
    product_image: flower1,
    product_name: '장미안개꽃다발',
    product_number: '202212214R',
    product_option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
    product_count: '1개',
    product_cost: '30,300원',
    sender_name: '김지민',
    sender_number: '010-0000-0000',
    sender_date: '2022.00.00 | 02:00 pm',
    sender_comment: '예쁘게 부탁드려요:)',
    receiver_name: '이남지',
    receiver_number: "010-7162-4113",
    receiver_zipCode: "02512",
    receiver_address: '서울시 마포구 독막로 320 (태영빌딩)',
    receiver_detail_address: '102동 302호',
    payment_method: "카드결제",
    payment_info: "비씨(5359************6517) 일시불",
    payment_delivery: "3,000원",
    payment_cost: "33,300원",
    point: '350',
    barogo_point: '296,400원',
    rider_name: "김용진",
    rider_number: "010-0000-0000",
    total_delivery_cost: '4,180원',
    distance: '1.4km',
    distance_fee: '3,000원',
    weather: '800원',
    vat: '380원',
    rider_time: '30'
  }

  export const portfolioInfo = {
    id: '220822A01',
    date: '2023.01.07',
    product_name: '장미안개 꽃다발',
    main_image: flower1,
    images: [flower1, flower2, flower3, flower4, flower5, flower6],
    goods: 108,
    review: 20,
    comment: "핑크 튤립 + 안개 꽃의 조합입니다🌸\n사진은 보정하지 않습니다.\n꽃 컬러가 너무 예뻐요:)",
    tag: ['튤립', '분홍튤립', '꽃다발', '기념일'],
    colorChip: ['#FF0000', '#FF5001', '#FFB800'],
    goodsInfo: goodsData,
    reviewInfo: reviewData,
  }

  export const submitsData = [
    submitData,
    submitData,
    submitData,
    submitData,
    submitData,
    submitData,
  ]

export const productsData = [
  productInfo,
  productInfo,
  productInfo,
  productInfo,
  productInfo,
  productInfo,
]

export const ordersData = [
  orderInfo,
  orderInfo,
  orderInfo,
  orderInfo,
  orderInfo,
  orderInfo,
]

export const portfolioData = [
  portfolioInfo,
  portfolioInfo,
  portfolioInfo,
  portfolioInfo,
  portfolioInfo,
  portfolioInfo,
]

export const plansData = [
  {
    id: 1,
    done: 1,
    description: '고터 꽃 사장님 연락',
    start: '9:00am',
  },
  {
    id: 2,
    done: 0,
    description: '고터 꽃 사장님 연락',
    start: '9:00am',
    end: '10:00am',
  },
  {
    id: 3,
    done: 1,
    description: '고터 꽃 사장님 연락',
    start: '9:00am',
  },
  {
    id: 4,
    done: 0,
    description: '고터 꽃 사장님 연락',
    start: '9:00am',
    end: '10:00am',
  },
  {
    id: 5,
    done: 0,
    description: '고터 꽃 사장님 연락',
    start: '11:00am',
    end: '12:00am',
  },
];

export const orderDemoData = [
  {
    id: 0,
    time: '9:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 1,
    time: '9:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: flower2,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 2,
    time: '9:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: flower3,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 3,
    time: '10:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: flower4,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 4,
    time: '10:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: flower5,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 5,
    time: '10:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: flower6,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 6,
    time: '10:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
];

export const chatData = [
  {
    date: '2022년 12월 15일 금요일',
    content: [{
      time: "오후 4:15",
      trans: 0,
      type: 1,
      image: flower1,
      product: "장미안개꽃다발",
      discount: "10%",
      cost: "40,000",
      discount_cost: "36,000원",
      name: "아미화"
    },
    {
      time: "오후 4:15",
      trans: 0,
      type: 0,
      comment: '안녕하세요 아미화입니다.\n주문하신 장미안개꽃다발에 옵션을 추가하셨는데 장미재고가 부족하네요...\n정말 죄송합니다.\n\n혹시 다른 소재로 변경드려도 괜찮을까요?\n사진 보내드리겠습니다:)',
      name: "아미화"
    },
    {
      time: "오후 4:17",
      trans: 1,
      type: 0,
      comment: '네',
      name: "김지민"
    },
    {
      time: "오후 4:17",
      trans: 1,
      type: 0,
      comment: '괜찮습니다.',
      name: "김지민"
    },
    ]

  }
];

export const dashboardOrder = [
  {
    time: '9:00 am',
    content: [0, 1, 2]
  },
  {
    time: '10:00 am',
    content: [3, 4, 5, 6]
  },
];

export const counselData = [
  {
    id: 1,
    avatar: user1,
    name: '이남남',
    date: '25분전',
    text:
      '포트폴리오에 있는 꽃다발 문의드립니다.',
    status: '1',
  },
  {
    id: 2,
    avatar: user2,
    name: '남남지',
    date: '30분전',
    text:
      '분홍 장미 안개 꽃다발에 장미 꽃 추가할 수 있나요? 된다면 추가 금액은 얼마인가요?',
    status: '1',
  },
  {
    id: 3,
    avatar: user3,
    name: '남남',
    date: '1시간전',
    text:
      '픽업 예약관련 문의드립니다.',
    status: '2',
  },
];

export const dashboardReviewData = [
  {
    id: 1,
    avatar: user1,
    name: '이남남',
    date: '25분전',
    text:
      '예약한 시간에 잘 받았습니다:)',
    status: 'new',
  },
  {
    id: 2,
    avatar: user2,
    name: '남남지',
    date: '30분전',
    text:
      '사진이랑 똑같아요 너무 예쁩니다! 배달로도 꽃 주문할 수 있어서 너무 좋아요.',
    status: 'new',
  },
];

export const salesListData = [
  {
    private_key: 11,
    date: '2023.01.14',
    type: '매입',
    product_name: '양재 꽃시장',
    total_cost: '105,000',
    payment: '카드결제',
    method: '플릿'
  },
  {
    private_key: 10,
    date: '2023.01.14',
    type: '매입',
    product_name: '양재 꽃시장',
    total_cost: '105,000',
    payment: '카드결제',
    method: '플릿'
  },
  {
    private_key: 9,
    date: '2023.01.14',
    type: '매입',
    product_name: '양재 꽃시장',
    total_cost: '105,000',
    payment: '카드결제',
    method: '가계부'
  },
  {
    private_key: 8,
    date: '2023.01.14',
    type: '매입',
    product_name: '양재 꽃시장',
    total_cost: '105,000',
    payment: '카드결제',
    method: '가계부'
  },
  {
    private_key: 7,
    date: '2023.01.14',
    type: '매입',
    product_name: '양재 꽃시장',
    total_cost: '105,000',
    payment: '카드결제',
    method: '가계부'
  },
  {
    private_key: 6,
    date: '2023.01.14',
    type: '매입',
    product_name: '양재 꽃시장',
    total_cost: '105,000',
    payment: '카드결제',
    method: '가계부'
  },
  {
    private_key: 5,
    date: '2023.01.14',
    type: '매출',
    order_number: '220822A01',
    product_name: '장미안개 꽃다발',
    total_cost: '35,000',
    payment: '카드결제',
    method: '가계부'
  },
  {
    private_key: 4,
    date: '2023.01.14',
    type: '매출',
    order_number: '220822A01',
    product_name: '장미안개 꽃다발',
    total_cost: '35,000',
    payment: '카드결제',
    method: '가계부'
  },
  {
    private_key: 3,
    date: '2023.01.14',
    type: '매출',
    order_number: '220822A01',
    product_name: '장미안개 꽃다발',
    total_cost: '35,000',
    payment: '카드결제',
    method: '플릿'
  },
  {
    private_key: 2,
    date: '2023.01.14',
    type: '매출',
    order_number: '220822A01',
    product_name: '장미안개 꽃다발',
    total_cost: '35,000',
    payment: '카드결제',
    method: '플릿'
  },
  {
    private_key: 1,
    date: '2023.01.14',
    type: '매출',
    order_number: '220822A01',
    product_name: '장미안개 꽃다발',
    total_cost: '35,000',
    payment: '카드결제',
    method: '플릿'
  },
  {
    private_key: 0,
    date: '2023.01.14',
    type: '매출',
    order_number: '220822A01',
    product_name: '장미안개 꽃다발',
    total_cost: '35,000',
    payment: '카드결제',
    method: '플릿'
  },
]

export const dummySalesData = {
  total: 2000000,
  salesTotalFlit: 1500000,
  salesTotalAccount: 1000000,
  purchaseTotalFlit: 350000,
  purchaseTotalAccount: 150000,
  salesFlit: [
    {name: "카드결제", cost: 1500000, count: 15},
    {name: "현장결제(POS)", cost: 150000, count: 4},
    {name: "계좌이체", cost: 50000, count: 1},
  ],
  salesAccount: [
    {name: "카드결제", cost: 400000, count: 5},
    {name: "현금", cost: 400000, count: 4},
    {name: "기타", cost: 0, count: 0},
  ],
  purchaseFlit: [
    {name: "플릿", cost: 50000, count: 3},
  ],
  purchaseAccount: [
    {name: "꽃 사입", cost: 300000, count: 3},
    {name: "배달료", cost: 145000, count: 5},
    {name: "기타", cost: 0, count: 0},
  ],

}

export const barChartOptions = {
  animation: {
    duration: 0
  },
  tooltips: {
    enabled: false
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        margin:10,
        ticks: {
          fontSize: 16,
        },
        barThickness: window.innerWidth > 700 ? 30 : 10,
        // barPercentage: 0.9,
        scaleLabel: {
          display: false,
        },
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          display: true,
        },
        scaleLabel: {
          display: false,
        },
        gridLines: {
          display: true,
        },
      },
    ],
  },
  tooltips: {
    displayColors: false,
    backgroundColor: '#DA4359',
    mode: 'x',
    bodyFontSize: 18,
    callbacks: {
      title: function () { }
    }
  },

};
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEKS = ['1st', '2nd', '3rd', '4th', '5th'];
const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

export const DayData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: DAYS,
    datasets: [
      {
        label: '매입',
        backgroundColor: "#C1DAFF",
        borderColor: "#C1DAFF",
        borderWidth: 1,
        data: [
          44,
          59,
          19,
          32,
          18,
          32,
          35,
        ],
      },
      {
        label: '매출',
        backgroundColor: "#3A89FF",
        borderColor: "#3A89FF",
        borderWidth: 1,
        data: [
          106,
          124,
          76,
          96,
          24,
          42,
          102,
        ],
      },
      
    ],
  };
};

export const WeekData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: WEEKS,
    datasets: [
      {
        label: '매압',
        backgroundColor: "#C1DAFF",
        borderColor: "#C1DAFF",
        borderWidth: 1,
        data: [
          44,
          59,
          19,
          32,
          18,
        ],
      },
      {
        label: '매출',
        backgroundColor: "#3A89FF",
        borderColor: "#3A89FF",
        borderWidth: 1,
        data: [
          106,
          124,
          76,
          96,
          24,
        ],
      },
      
    ],
  };
};

export const MonthData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: '매압',
        backgroundColor: "#C1DAFF",
        borderColor: "#C1DAFF",
        borderWidth: 1,
        data: [
          44,
          59,
          19,
          32,
          18,
          44,
          59,
          19,
          32,
          18,
        ],
      },
      {
        label: '매출',
        backgroundColor: "#3A89FF",
        borderColor: "#3A89FF",
        borderWidth: 1,
        data: [
          106,
          124,
          76,
          96,
          24,
          106,
          124,
          76,
          96,
          24,
        ],
      },
      
    ],
  };
};

export const monthData = [
  { name: "Jan", purchase: 4000, sales: 2400 },
  { name: "Feb", purchase: 3000, sales: 1398 },
  { name: "Mar", purchase: 2000, sales: 9800 },
  { name: "Apr", purchase: 2780, sales: 3908 },
  { name: "May", purchase: 1890, sales: 4800 },
  { name: "Jun", purchase: 2390, sales: 3800 },
  { name: "Jul", purchase: 3490, sales: 4300 },
  { name: "Aug", purchase: 2390, sales: 3800 },
  { name: "Sep", purchase: 3490, sales: 4300 },
  { name: "Oct", purchase: 2390, sales: 3800 },
  { name: "Nov", purchase: 3490, sales: 4300 },
  { name: "Dec", purchase: 2390, sales: 3800 },
];

export const weekData = [
  { name: "1주", purchase: 4000, sales: 2400 },
  { name: "2주", purchase: 3000, sales: 1398 },
  { name: "3주", purchase: 2000, sales: 9800 },
  { name: "4주", purchase: 2780, sales: 3908 },
  { name: "5주", purchase: 1890, sales: 4800 },
];

export const dayData = [
  { name: "Sun", purchase: 4000, sales: 2400 },
  { name: "Mon", purchase: 3000, sales: 1398 },
  { name: "Tue", purchase: 2000, sales: 9800 },
  { name: "Wed", purchase: 2780, sales: 3908 },
  { name: "Thu", purchase: 1890, sales: 4800 },
  { name: "Fri", purchase: 2000, sales: 9800 },
  { name: "Sat", purchase: 2780, sales: 3908 },
];

export const mark = [
  { markdate: '2023-04-15' },
  { markdate: '2023-04-16' },
  { markdate: '2023-04-17' },
  { markdate: '2023-04-22' },
  { markdate: '2023-04-25' },
];

export const calculateData = {
  dueDate:'2023-04-25',
  startDate: '2023-04-03',
  completeDate: '2023-04-17',
  cost: 2000000,
  order: 20,
  totalSales: 20000000,
  vat: 2000000,
  totalNetSales: 1800000,
}

export const point = 296400

export const advertiseNotice = [
  {
    title: '[공지] 광고 공지 테스트 1',
  },
  {
    title: '[공지] 광고 공지 테스트 1'
  },
  {
    title: '[공지] 광고 공지 테스트 3'
  },
  {
    title: '[공지] 광고 공지 테스트 4'
  }

]

export const advertiseData =
{
    date: '2023.04.25',
    total: 10,
    remain: 5,
    isAd: true,
}

export const allUsersData = [
  { title: 'Customer', subtitle: '전체 고객 수', number: '67,790', increase: '+145' },
  { title: 'Shop', subtitle: '전체 꽃집 수', number: '4,500', increase: '+14' },
  { title: 'Florist', subtitle: '전체 플로리스트 수', number: '4,300', increase: '+13' },
  { title: 'Out', subtitle: '탈퇴 회원 수', number: '34', increase: '+13' },
];

export const genderData = [
  { name: '여성', value: 400 },
  { name: '남성', value: 300 },
  { name: '기타', value: 100 }
];

export const ageData = [
  { name: '10대', value: 400 },
  { name: '20대', value: 300 },
  { name: '30대', value: 100 },
  { name: '40대', value: 400 },
  { name: '50대', value: 300 },
  { name: '60대', value: 100 },
  { name: '70대', value: 400 }
];

export const productData = [
  { name: '꽃', value: 400 },
  { name: '식물', value: 300 },
  { name: '화환', value: 100 },
  { name: '공간연출', value: 400 },
  { name: '정기배송', value: 300 }
];

export const orderTableData = [
  {
    order_number: 'AAD0123AB10',
    from: "전수민",
    to: '최종현',
    product_image: <img className='table_image' src={flower1}></img>,
    product_name: '엔티크 장미 꽃다발',
    cost: '50,000원',
    order_date: '2022.01.01',
    payment_date: '2022.01.01',
    payment_method: '카드',
    florist_number: '010-0000-0000',
    florist_address: '서울시 강남구 도산대로 00-0',
    florist_address_detail: 'OO빌딩 1층 12호',
    customer_number: '010-0000-0000',
    customer_address: '서울시 강남구 테헤란로 OO-O',
    customer_address_detail: 'OO아파트 102동 11호',
    points: "500원",
    comment: "꽃 안망가지게 배달 부탁드립니당",
    state: "배달중",
    type: "바로고",
    refund: "환불처리"
  },
  {
    order_number: 'CVD0123AC43',
    from: '김지은',
    to: '주재훈',
    product_image: <img className='table_image' src={flower2}></img>,
    product_name: '장미 | 튤립 꽃 바구니',
    cost: '123,000원',
    order_date: '2022.01.01',
    payment_date: '2022.01.01',
    payment_method: '현장 결제(POS)',
    type: "픽업",
    refund: "환불미처리"
  },
  {
    order_number: 'CDA0123CB11',
    from: 'bouquet',
    to: '전엄지',
    product_image: <img className='table_image' src={flower3}></img>,
    product_name: '장미 축하 화환',
    cost: '88,000원',
    order_date: '2022.01.01',
    payment_date: '2022.01.01',
    payment_method: '계좌 이체',
    type: "기타",
    refund: "환불처리"
  },
  {
    order_number: 'FFD3405BV01',
    from: 'Flit',
    to: '이남지',
    product_image: <img className='table_image' src={flower4}></img>,
    product_name: '행운목_대형',
    cost: '156,000원',
    order_date: '2022.01.01',
    payment_date: '2022.01.01',
    payment_method: '계좌이체',
    type: "픽업",
    refund: "환불처리"
  },
  {
    order_number: 'THG1022DD45',
    from: '오현승',
    to: '김현진',
    product_image: <img className='table_image' src={flower5}></img>,
    product_name: '스투키 화분 소형',
    cost: '35,000원',
    order_date: '2022.01.01',
    payment_date: '2022.01.01',
    payment_method: '계좌이체',
    type: '바로고',
    refund: "환불미처리"
  },
  {
    order_number: 'BNG4055CC09',
    from: '김아현',
    to: '주릭',
    product_image: <img className='table_image' src={flower6}></img>,
    product_name: '카네이션 꽃다발',
    cost: '98,000원',
    order_date: '2022.01.01',
    payment_date: '2022.01.01',
    payment_method: '현장 결제(POS)',
    type: '기타',
    refund: "환불처리"
  },
];

export const totalSalesData = {
  sales_cost: 32430000,
  sales_count: 520,
  delivery_ing: 23,
  cancel_cost: 322000,
  cancel_count: 7,
  delivery_complete_count: 497
}

export const salesTableData = [
  {
    nickname: '아미화\n(sm101)',
    number: "010-0000-0000",
    address: '서울시 강남구 테헤란로 27',
    sales: '789,000(58건)',
    cancels: '56,000(2건)',
    refund: '85,000(3건)'
  }
]

export const calculateTableData = [
  {
    nickname: '아미화\n(sm101)',
    number: "010-0000-0000",
    mail: 'Amihwa@naver.com',
    total: 950000,
    commission: 85500,
    non_commission: 864500,
    delivery: 120000,
    state: '미처리'
  },
  {
    nickname: '아미화\n(sm101)',
    number: "010-0000-0000",
    mail: 'Amihwa@naver.com',
    total: 950000,
    commission: 85500,
    non_commission: 864500,
    delivery: 120000,
    state: '미처리'
  },
  {
    nickname: '아미화\n(sm101)',
    number: "010-0000-0000",
    mail: 'Amihwa@naver.com',
    total: 950000,
    commission: 85500,
    non_commission: 864500,
    delivery: 120000,
    state: '미처리'
  },
];

export const couponData = [
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
  {
    grade: "Green",
    name: "",
    nickname: "",
    number: "",
  },
]

export const couponList = [
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
]

export const commercialList = [
    {
      grade: "Flinner",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinner",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinner",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinney",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinner",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinney",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinner",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinney",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinney",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    {
      grade: "Flinney",
      nickname: "이미화\n(sm101)",
      category:"Shop",
      number: "010-0000-0000",
      location:"강남구",
    },
    
  ]

  export const adData = {
    userData : shopInfo,
    productData: productInfo,
    adDate: '2023년 4월 30일'
  }

  export const noticeData = [
    {
      title: "공지",
      date: "2022.01.01"
    },
    {
      title: "이벤트",
      date: "2022.01.01"
    },
    {
      title: "공지",
      date: "2022.01.01"
    },
    {
      title: "공지",
      date: "2022.01.01"
    },
    {
      title: "공지",
      date: "2022.01.01"
    },
    {
      title: "이벤트",
      date: "2022.01.01"
    },
  ]