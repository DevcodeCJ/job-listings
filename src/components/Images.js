import PhotosnapImg from "../images/photosnap.svg";
import ManageImg from "../images/manage.svg";
import AccountImg from "../images/account.svg";
import MyHomeImg from "../images/myhome.svg";
import LoopStudiosImg from "../images/loop-studios.svg";
import FaceItImg from "../images/faceit.svg";
import ShortlyImg from "../images/shortly.svg";
import InsureImg from "../images/insure.svg";
import EyecamCoImg from "../images/eyecam-co.svg";
import AirFilterCompanyImg from "../images/the-air-filter-company.svg";

const Photosnap = () => {
  return <img className="logo" src={PhotosnapImg} alt="Photosnap" />;
};

const Manage = () => {
  return <img className="logo" src={ManageImg} alt="Manage" />;
};

const Account = () => {
  return <img className="logo" src={AccountImg} alt="Account" />;
};

const MyHome = () => {
  return <img className="logo" src={MyHomeImg} alt="Myhome" />;
};

const LoopStudios = () => {
  return <img className="logo" src={LoopStudiosImg} alt="Loop-studios" />;
};

const FaceIt = () => {
  return <img className="logo" src={FaceItImg} alt="Faceit" />;
};

const Shortly = () => {
  return <img className="logo" src={ShortlyImg} alt="Shortly" />;
};

const Insure = () => {
  return <img className="logo" src={InsureImg} alt="Insure" />;
};

const EyecamCo = () => {
  return <img className="logo" src={EyecamCoImg} alt="Eyecam-co" />;
};

const AirFilterCompany = () => {
  return (
    <img
      className="logo"
      src={AirFilterCompanyImg}
      alt="The-air-filter-company"
    />
  );
};

export {
  Photosnap,
  Account,
  Manage,
  MyHome,
  LoopStudios,
  FaceIt,
  Shortly,
  Insure,
  EyecamCo,
  AirFilterCompany,
};
