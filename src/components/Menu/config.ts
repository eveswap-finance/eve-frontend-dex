import { MenuEntry } from '@eveswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://eveswap.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://eveswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://eveswap.finance/pools',
  },
  {
    label: 'Eden',
    icon: 'EdenIcon',
    href: 'https://eveswap.finance/eden',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://eveswap.finance/lottery',
  },
//  {
//    label: 'IPO',
//    icon: 'IfoIcon',
//    href: 'https://eveswap.finance/ipo',
//  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://eveswap.finance/referrals',
  },
  {
    label: 'Audits',
    icon: 'ShieldIcon',
    href: 'https://eveswap.finance/security/audits',
  },
  {
    label: 'Features',
    icon: 'FeatureIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://eveswap.finance/tokenomics/automatic-liquidity',
      },
      {
        label: 'Automatic Burning',
        href: 'https://eveswap.finance/tokenomics/automatic-burning',
      },
      {
        label: 'Harvest Lockup',
        href: 'https://eveswap.finance/tokenomics/harvest-lockup',
      },
      {
        label: 'Anti-Whale',
        href: 'https://eveswap.finance/tokenomics/anti-whale',
      },
    ],
  },
  // {
  //   label: 'Price Charts',
  //   icon: 'ChartIcon',
  //   items: [
  //     {
  //       label: 'DexGuru',
  //       href: 'https://dex.guru/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7-bsc',
  //     },
  //     {
  //       label: 'PooCoin',
  //       href: 'https://poocoin.app/tokens/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
  //     },
  //     {
  //       label: 'BoggedFinance',
  //       href: 'https://charts.bogged.finance/?token=0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7',
  //     },
  //     {
  //       label: 'DexTools',
  //       href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xecc11a78490866e0073ebc4a4dcb6f75673c8685',
  //     },
  //   ],
  // },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/apple',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/apple',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/apple/',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/price/EveSwap-APPLE',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/apple',
      },
    ],
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
//{
//    label: 'Analytics',
//    icon: 'InfoIcon',
//    items: [
//      {
//        label: 'Overview',
//        href: 'https://pantherswap.info',
//      },
//      {
//        label: 'Tokens',
//        href: 'https://pantherswap.info/tokens',
//      },
//      {
//        label: 'Pairs',
//        href: 'https://pantherswap.info/pairs',
//      },
//      {
//        label: 'Accounts',
//        href: 'https://pantherswap.info/accounts',
//      },
//    ],
//  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/eveswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.eveswap.finance',
      },
      {
        label: 'Roadmap',
        href: 'https://eveswap.finance/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://eveswap.medium.com',
      },
      {
        label: 'Voting',
        href: 'https://voting.eveswap.finance/',
      },
    ],
  },
]

export default config
