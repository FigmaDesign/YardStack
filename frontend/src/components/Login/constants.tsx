import GroupsIcon from '@mui/icons-material/Groups'
import ApartmentIcon from '@mui/icons-material/Apartment'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import msLogo from '../commonfiles/Images/microsoft.svg'
import appleLogo from '../commonfiles/Images/apple.svg'
import googleLogo from '../commonfiles/Images/google.svg'

export const SOCIAL = [
  { label: 'Google',    logo: googleLogo },
  { label: 'Microsoft', logo: msLogo },
  { label: 'Apple',     logo: appleLogo },
]

export const MOBILE_STATS = [
  { Icon: GroupsIcon,              value: '10K+',     label: 'Active Users' },
  { Icon: ApartmentIcon,           value: '₹25K Cr+', label: 'Properties Value' },
  { Icon: TrendingUpIcon,          value: '500+',     label: 'Top Developers' },
  { Icon: CheckCircleOutlinedIcon, value: '99.9%',    label: 'Uptime' },
]
