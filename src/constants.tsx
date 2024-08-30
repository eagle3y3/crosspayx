import type { SideNavItem } from "@/lib/types";
import Image from "next/image";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Search",
    path: "/",
    icon: <Image src="/search.svg" height={30} width={30} alt="Search" />,
  },

  {
    title: "Transaction Historys",
    path: "/inbox",
    icon: <Image src="/inbox.svg" height={30} width={30} alt="Transactions" />,
  },
  {
    title: "Organizations",
    path: "/prepare",
    icon: (
      <Image
        src="/prepare.svg"
        height={30}
        width={30}
        alt="Read Articles to prepare for interviews"
      />
    ),
  },
  //   {
  //     title: "Projects",
  //     path: "/projects",
  //     icon: <Icon icon="lucide:folder" width="24" height="24" />,
  //     submenu: true,
  //     subMenuItems: [
  //       { title: "All", path: "/projects" },
  //       { title: "Web Design", path: "/projects/web-design" },
  //       { title: "Graphic Design", path: "/projects/graphic-design" },
  //     ],
  //   },
  //   {
  //     title: "Messages",
  //     path: "/messages",
  //     icon: <Icon icon="lucide:mail" width="24" height="24" />,
  //   },
  //   {
  //     title: "Settings",
  //     path: "/settings",
  //     icon: <Icon icon="lucide:settings" width="24" height="24" />,
  //     submenu: true,
  //     subMenuItems: [
  //       { title: "Account", path: "/settings/account" },
  //       { title: "Privacy", path: "/settings/privacy" },
  //     ],
  //   },
  //   {
  //     title: "Help",
  //     path: "/help",
  //     icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  //   },
];

export const LOCATION_ITEMS = [
  { name: "Afghanistan", code: "AF", continentGroup: "Asia" },
  { name: "Åland Islands", code: "AX", continentGroup: "Europe" },
  { name: "Albania", code: "AL", continentGroup: "Europe" },
  { name: "Algeria", code: "DZ", continentGroup: "Africa" },
  { name: "American Samoa", code: "AS", continentGroup: "Oceania" },
  { name: "AndorrA", code: "AD", continentGroup: "Europe" },
  { name: "Angola", code: "AO", continentGroup: "Africa" },
  { name: "Anguilla", code: "AI", continentGroup: "North America" },
  { name: "Antarctica", code: "AQ", continentGroup: "Antarctica" },
  { name: "Antigua and Barbuda", code: "AG", continentGroup: "North America" },
  { name: "Argentina", code: "AR", continentGroup: "South America" },
  { name: "Armenia", code: "AM", continentGroup: "Asia" },
  { name: "Aruba", code: "AW", continentGroup: "North America" },
  { name: "Australia", code: "AU", continentGroup: "Oceania" },
  { name: "Austria", code: "AT", continentGroup: "Europe" },
  { name: "Azerbaijan", code: "AZ", continentGroup: "Asia" },
  { name: "Bahamas", code: "BS", continentGroup: "North America" },
  { name: "Bahrain", code: "BH", continentGroup: "Asia" },
  { name: "Bangladesh", code: "BD", continentGroup: "Asia" },
  { name: "Barbados", code: "BB", continentGroup: "North America" },
  { name: "Belarus", code: "BY", continentGroup: "Europe" },
  { name: "Belgium", code: "BE", continentGroup: "Europe" },
  { name: "Belize", code: "BZ", continentGroup: "North America" },
  { name: "Benin", code: "BJ", continentGroup: "Africa" },
  { name: "Bermuda", code: "BM", continentGroup: "North America" },
  { name: "Bhutan", code: "BT", continentGroup: "Asia" },
  { name: "Bolivia", code: "BO", continentGroup: "South America" },
  { name: "Bosnia and Herzegovina", code: "BA", continentGroup: "Europe" },
  { name: "Botswana", code: "BW", continentGroup: "Africa" },
  { name: "Bouvet Island", code: "BV", continentGroup: "Antarctica" },
  { name: "Brazil", code: "BR", continentGroup: "South America" },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    continentGroup: "Asia",
  },
  { name: "Bulgaria", code: "BG", continentGroup: "Europe" },
  { name: "Burkina Faso", code: "BF", continentGroup: "Africa" },
  { name: "Burundi", code: "BI", continentGroup: "Africa" },
  { name: "Cambodia", code: "KH", continentGroup: "Asia" },
  { name: "Cameroon", code: "CM", continentGroup: "Africa" },
  { name: "Canada", code: "CA", continentGroup: "North America" },
  { name: "Cape Verde", code: "CV", continentGroup: "Africa" },
  { name: "Cayman Islands", code: "KY", continentGroup: "North America" },
  { name: "Central African Republic", code: "CF", continentGroup: "Africa" },
  { name: "Chad", code: "TD", continentGroup: "Africa" },
  { name: "Chile", code: "CL", continentGroup: "South America" },
  { name: "China", code: "CN", continentGroup: "Asia" },
  { name: "Christmas Island", code: "CX", continentGroup: "Asia" },
  { name: "Cocos (Keeling) Islands", code: "CC", continentGroup: "Asia" },
  { name: "Colombia", code: "CO", continentGroup: "South America" },
  { name: "Comoros", code: "KM", continentGroup: "Africa" },
  { name: "Congo", code: "CG", continentGroup: "Africa" },
  {
    name: "Congo, The Democratic Republic of the",
    code: "CD",
    continentGroup: "Africa",
  },
  { name: "Cook Islands", code: "CK", continentGroup: "Oceania" },
  { name: "Costa Rica", code: "CR", continentGroup: "North America" },
  { name: "Cote D'Ivoire", code: "CI", continentGroup: "Africa" },
  { name: "Croatia", code: "HR", continentGroup: "Europe" },
  { name: "Cuba", code: "CU", continentGroup: "North America" },
  { name: "Cyprus", code: "CY", continentGroup: "Europe" },
  { name: "Czech Republic", code: "CZ", continentGroup: "Europe" },
  { name: "Denmark", code: "DK", continentGroup: "Europe" },
  { name: "Djibouti", code: "DJ", continentGroup: "Africa" },
  { name: "Dominica", code: "DM", continentGroup: "North America" },
  { name: "Dominican Republic", code: "DO", continentGroup: "North America" },
  { name: "Ecuador", code: "EC", continentGroup: "South America" },
  { name: "Egypt", code: "EG", continentGroup: "Africa" },
  { name: "El Salvador", code: "SV", continentGroup: "North America" },
  { name: "Equatorial Guinea", code: "GQ", continentGroup: "Africa" },
  { name: "Eritrea", code: "ER", continentGroup: "Africa" },
  { name: "Estonia", code: "EE", continentGroup: "Europe" },
  { name: "Ethiopia", code: "ET", continentGroup: "Africa" },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
    continentGroup: "South America",
  },
  { name: "Faroe Islands", code: "FO", continentGroup: "Europe" },
  { name: "Fiji", code: "FJ", continentGroup: "Oceania" },
  { name: "Finland", code: "FI", continentGroup: "Europe" },
  { name: "France", code: "FR", continentGroup: "Europe" },
  { name: "French Guiana", code: "GF", continentGroup: "South America" },
  { name: "French Polynesia", code: "PF", continentGroup: "Oceania" },
  {
    name: "French Southern Territories",
    code: "TF",
    continentGroup: "Antarctica",
  },
  { name: "Gabon", code: "GA", continentGroup: "Africa" },
  { name: "Gambia", code: "GM", continentGroup: "Africa" },
  { name: "Georgia", code: "GE", continentGroup: "Asia" },
  { name: "Germany", code: "DE", continentGroup: "Europe" },
  { name: "Ghana", code: "GH", continentGroup: "Africa" },
  { name: "Gibraltar", code: "GI", continentGroup: "Europe" },
  { name: "Greece", code: "GR", continentGroup: "Europe" },
  { name: "Greenland", code: "GL", continentGroup: "North America" },
  { name: "Grenada", code: "GD", continentGroup: "North America" },
  { name: "Guadeloupe", code: "GP", continentGroup: "North America" },
  { name: "Guam", code: "GU", continentGroup: "Oceania" },
  { name: "Guatemala", code: "GT", continentGroup: "North America" },
  { name: "Guernsey", code: "GG", continentGroup: "Europe" },
  { name: "Guinea", code: "GN", continentGroup: "Africa" },
  { name: "Guinea-Bissau", code: "GW", continentGroup: "Africa" },
  { name: "Guyana", code: "GY", continentGroup: "South America" },
  { name: "Haiti", code: "HT", continentGroup: "North America" },
  { name: "Honduras", code: "HN", continentGroup: "North America" },
  { name: "Hong Kong", code: "HK", continentGroup: "Asia" },
  { name: "Hungary", code: "HU", continentGroup: "Europe" },
  { name: "Iceland", code: "IS", continentGroup: "Europe" },
  { name: "India", code: "IN", continentGroup: "Asia" },
  { name: "Indonesia", code: "ID", continentGroup: "Asia" },
  { name: "Iraq", code: "IQ", continentGroup: "Asia" },
  { name: "Ireland", code: "IE", continentGroup: "Europe" },
  { name: "Israel", code: "IL", continentGroup: "Asia" },
  { name: "Italy", code: "IT", continentGroup: "Europe" },
  { name: "Jamaica", code: "JM", continentGroup: "North America" },
  { name: "Japan", code: "JP", continentGroup: "Asia" },
  { name: "Jersey", code: "JE", continentGroup: "Europe" },
  { name: "Jordan", code: "JO", continentGroup: "Asia" },
  { name: "Kazakhstan", code: "KZ", continentGroup: "Asia" },
  { name: "Kenya", code: "KE", continentGroup: "Africa" },
  { name: "Kiribati", code: "KI", continentGroup: "Oceania" },
  { name: "Korea, Republic of", code: "KR", continentGroup: "Asia" },
  { name: "Kuwait", code: "KW", continentGroup: "Asia" },
  { name: "Kyrgyzstan", code: "KG", continentGroup: "Asia" },
  { name: "Latvia", code: "LV", continentGroup: "Europe" },
  { name: "Lebanon", code: "LB", continentGroup: "Asia" },
  { name: "Lesotho", code: "LS", continentGroup: "Africa" },
  { name: "Liberia", code: "LR", continentGroup: "Africa" },
  { name: "Liechtenstein", code: "LI", continentGroup: "Europe" },
  { name: "Lithuania", code: "LT", continentGroup: "Europe" },
  { name: "Luxembourg", code: "LU", continentGroup: "Europe" },
  { name: "Macao", code: "MO", continentGroup: "Asia" },
  { name: "Madagascar", code: "MG", continentGroup: "Africa" },
  { name: "Malawi", code: "MW", continentGroup: "Africa" },
  { name: "Malaysia", code: "MY", continentGroup: "Asia" },
  { name: "Maldives", code: "MV", continentGroup: "Asia" },
  { name: "Mali", code: "ML", continentGroup: "Africa" },
  { name: "Malta", code: "MT", continentGroup: "Europe" },
  { name: "Marshall Islands", code: "MH", continentGroup: "Oceania" },
  { name: "Martinique", code: "MQ", continentGroup: "North America" },
  { name: "Mauritania", code: "MR", continentGroup: "Africa" },
  { name: "Mauritius", code: "MU", continentGroup: "Africa" },
  { name: "Mayotte", code: "YT", continentGroup: "Africa" },
  { name: "Mexico", code: "MX", continentGroup: "North America" },
  { name: "Monaco", code: "MC", continentGroup: "Europe" },
  { name: "Mongolia", code: "MN", continentGroup: "Asia" },
  { name: "Montserrat", code: "MS", continentGroup: "North America" },
  { name: "Morocco", code: "MA", continentGroup: "Africa" },
  { name: "Mozambique", code: "MZ", continentGroup: "Africa" },
  { name: "Myanmar", code: "MM", continentGroup: "Asia" },
  { name: "Namibia", code: "NA", continentGroup: "Africa" },
  { name: "Nauru", code: "NR", continentGroup: "Oceania" },
  { name: "Nepal", code: "NP", continentGroup: "Asia" },
  { name: "Netherlands", code: "NL", continentGroup: "Europe" },
  { name: "New Caledonia", code: "NC", continentGroup: "Oceania" },
  { name: "New Zealand", code: "NZ", continentGroup: "Oceania" },
  { name: "Nicaragua", code: "NI", continentGroup: "North America" },
  { name: "Niger", code: "NE", continentGroup: "Africa" },
  { name: "Nigeria", code: "NG", continentGroup: "Africa" },
  { name: "Niue", code: "NU", continentGroup: "Oceania" },
  { name: "Norfolk Island", code: "NF", continentGroup: "Oceania" },
  { name: "Northern Mariana Islands", code: "MP", continentGroup: "Oceania" },
  { name: "Norway", code: "NO", continentGroup: "Europe" },
  { name: "Oman", code: "OM", continentGroup: "Asia" },
  { name: "Pakistan", code: "PK", continentGroup: "Asia" },
  { name: "Palau", code: "PW", continentGroup: "Oceania" },
  { name: "Panama", code: "PA", continentGroup: "North America" },
  { name: "Papua New Guinea", code: "PG", continentGroup: "Oceania" },
  { name: "Paraguay", code: "PY", continentGroup: "South America" },
  { name: "Peru", code: "PE", continentGroup: "South America" },
  { name: "Philippines", code: "PH", continentGroup: "Asia" },
  { name: "Pitcairn", code: "PN", continentGroup: "Oceania" },
  { name: "Poland", code: "PL", continentGroup: "Europe" },
  { name: "Portugal", code: "PT", continentGroup: "Europe" },
  { name: "Puerto Rico", code: "PR", continentGroup: "North America" },
  { name: "Qatar", code: "QA", continentGroup: "Asia" },
  { name: "Reunion", code: "RE", continentGroup: "Africa" },
  { name: "Romania", code: "RO", continentGroup: "Europe" },
  { name: "Russian Federation", code: "RU", continentGroup: "Europe" },
  { name: "RWANDA", code: "RW", continentGroup: "Africa" },
  { name: "Saint Helena", code: "SH", continentGroup: "Africa" },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    continentGroup: "North America",
  },
  { name: "Saint Lucia", code: "LC", continentGroup: "North America" },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    continentGroup: "North America",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    continentGroup: "North America",
  },
  { name: "Samoa", code: "WS", continentGroup: "Oceania" },
  { name: "San Marino", code: "SM", continentGroup: "Europe" },
  { name: "Sao Tome and Principe", code: "ST", continentGroup: "Africa" },
  { name: "Saudi Arabia", code: "SA", continentGroup: "Asia" },
  { name: "Senegal", code: "SN", continentGroup: "Africa" },
  { name: "Serbia and Montenegro", code: "CS", continentGroup: "Europe" },
  { name: "Seychelles", code: "SC", continentGroup: "Africa" },
  { name: "Sierra Leone", code: "SL", continentGroup: "Africa" },
  { name: "Singapore", code: "SG", continentGroup: "Asia" },
  { name: "Slovakia", code: "SK", continentGroup: "Europe" },
  { name: "Slovenia", code: "SI", continentGroup: "Europe" },
  { name: "Solomon Islands", code: "SB", continentGroup: "Oceania" },
  { name: "Somalia", code: "SO", continentGroup: "Africa" },
  { name: "South Africa", code: "ZA", continentGroup: "Africa" },
  { name: "Spain", code: "ES", continentGroup: "Europe" },
  { name: "Sri Lanka", code: "LK", continentGroup: "Asia" },
  { name: "Sudan", code: "SD", continentGroup: "Africa" },
  { name: "Suriname", code: "SR", continentGroup: "South America" },
  { name: "Svalbard and Jan Mayen", code: "SJ", continentGroup: "Europe" },
  { name: "Swaziland", code: "SZ", continentGroup: "Africa" },
  { name: "Sweden", code: "SE", continentGroup: "Europe" },
  { name: "Switzerland", code: "CH", continentGroup: "Europe" },
  { name: "Syrian Arab Republic", code: "SY", continentGroup: "Asia" },
  { name: "Taiwan, Province of China", code: "TW", continentGroup: "Asia" },
  { name: "Tajikistan", code: "TJ", continentGroup: "Asia" },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
    continentGroup: "Africa",
  },
  { name: "Thailand", code: "TH", continentGroup: "Asia" },
  { name: "Timor-Leste", code: "TL", continentGroup: "Asia" },
  { name: "Togo", code: "TG", continentGroup: "Africa" },
  { name: "Tokelau", code: "TK", continentGroup: "Oceania" },
  { name: "Tonga", code: "TO", continentGroup: "Oceania" },
  { name: "Trinidad and Tobago", code: "TT", continentGroup: "North America" },
  { name: "Tunisia", code: "TN", continentGroup: "Africa" },
  { name: "Turkey", code: "TR", continentGroup: "Asia" },
  { name: "Turkmenistan", code: "TM", continentGroup: "Asia" },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    continentGroup: "North America",
  },
  { name: "Tuvalu", code: "TV", continentGroup: "Oceania" },
  { name: "Uganda", code: "UG", continentGroup: "Africa" },
  { name: "Ukraine", code: "UA", continentGroup: "Europe" },
  { name: "United Arab Emirates", code: "AE", continentGroup: "Asia" },
  { name: "United Kingdom", code: "GB", continentGroup: "Europe" },
  { name: "United States", code: "US", continentGroup: "North America" },
  { name: "Uruguay", code: "UY", continentGroup: "South America" },
  { name: "Uzbekistan", code: "UZ", continentGroup: "Asia" },
  { name: "Vanuatu", code: "VU", continentGroup: "Oceania" },
  { name: "Venezuela", code: "VE", continentGroup: "South America" },
  { name: "Viet Nam", code: "VN", continentGroup: "Asia" },
  {
    name: "Virgin Islands, British",
    code: "VG",
    continentGroup: "North America",
  },
  { name: "Virgin Islands, U.S.", code: "VI", continentGroup: "North America" },
  { name: "Wallis and Futuna", code: "WF", continentGroup: "Oceania" },
  { name: "Western Sahara", code: "EH", continentGroup: "Africa" },
  { name: "Yemen", code: "YE", continentGroup: "Asia" },
  { name: "Zambia", code: "ZM", continentGroup: "Africa" },
  { name: "Zimbabwe", code: "ZW", continentGroup: "Africa" },
];
