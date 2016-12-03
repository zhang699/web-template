export default [{
  title: 'Elements',
  link: 'elements',
  childrenNodes: null,
}, {
  title: 'Colors',
  link: 'colors',
  childrenNodes: null,
}, {
  title: '會員',
  link: 'member',
  childrenNodes: [{
    title: '安置組織表',
    link: 'organization',
    childrenNodes: null,
  }, {
    title: '推薦組織表',
    link: 'recommendation',
    childrenNodes: null,
  }, {
    title: '獎金查詢',
    link: 'bonussearch',
    childrenNodes: null,
  },
  // {
  //   title: 'SP獎金(這一頁拿掉，併入獎金查詢)',
  //   link: 'spbonus',
  //   childrenNodes: null,
  // }
],
}, {
  title: '回饋積分管理',
  link: 'feedback',
  childrenNodes: [{
    title: '回饋積分查詢',
    link: 'bonussearch',
    childrenNodes: null,
  }, {
    title: '粉絲註冊/ＡＰ轉帳',
    link: 'fans',
    childrenNodes: null,
  },
  // {
  //   title: '兌換回饋積分(這一頁拿掉)',
  //   link: 'exchange',
  //   childrenNodes: null,
  // },
  {
    title: '回饋積分註冊轉換',
    link: 'registconvert',
    childrenNodes: null,
  }, {
    title: '易物點轉換MP積分',
    link: 'mpbonus',
    childrenNodes: null,
  }],
}, {
  title: '易物點交易管理',
  link: 'transaction',
  childrenNodes: [{
    title: '匯率名單',
    link: 'ratelist',
    childrenNodes: null,
  }, {
    title: '易物點管理',
    link: 'pointmanage',
    childrenNodes: null,
  }, {
    title: '購買易物點',
    link: 'buypoint',
    childrenNodes: null,
  }, {
    title: '出售易物點',
    link: 'salepoint',
    childrenNodes: null,
  }]
}, {
  title: '服務台',
  link: 'service',
  childrenNodes: [{
    title: '張貼新訊息',
    link: 'post',
    childrenNodes: null,
  }, {
    title: '歷史訊息',
    link: 'history',
    childrenNodes: null,
  }]
}, {
  title: '銷售回饋積分',
  link: 'salespoint',
  childrenNodes: [{
    title: '購買銷售回饋積分',
    link: 'purchase',
    childrenNodes: null,
  },
  {
    title: '已購銷售回饋積分',
    link: 'items',
    childrenNodes: null,
  },
  {
    title: '賣出銷售回饋積分',
    link: 'sales',
    childrenNodes: null,
  },
  {
    title: '核可銷售回饋積分',
    link: 'confirm',
    childrenNodes: null,
  }
]
},
{
  title: '粉絲註冊＆帳戶升級',
  link: 'fans',
  childrenNodes: [{
    title: '新粉絲註冊',
    link: 'fansregister',
    childrenNodes: null,
  }, {
    title: '帳戶升級',
    link: 'accountupgrade',
    childrenNodes: null,
  }, {
    title: '帳戶狀態列表',
    link: 'acccountupgradelist',
    childrenNodes: null,
  }, {
    title: '採購查詢',
    link: 'purchasesearch',
    childrenNodes: null,
  }]
}
];
