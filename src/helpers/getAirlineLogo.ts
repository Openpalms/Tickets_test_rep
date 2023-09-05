import SU from '../assets/SU.png';
import TK from '../assets/TK.jpg';
import BA from '../assets/BA.jpg';
import S7 from '../assets/S7.png';
export const getAirlineLogo = (carrier: string) => {
  switch (carrier) {
    case 'TK':
      return TK;
    case 'BA':
      return BA;
    case 'SU':
      return SU;
    case 'S7':
      return S7;
    default:
      return '';
  }
};
