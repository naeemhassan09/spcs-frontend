import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageMain from "./pages/home-page-main";
import MemberViewMember from "./pages/member-view-member";
import ProfileEditProfile from "./pages/profile-edit-profile";
import ProfileUpdateProfilePic from "./pages/profile-update-profile-pic";
import ProfileUpdatePassword from "./pages/profile-update-password";
import MemberViewAllMembersMain from "./pages/member-view-all-members-main";
import ParcelsAllParcelsMain from "./pages/parcels-all-parcels-main";
import ShipmentsReturnShipmentParc from "./pages/shipments-return-shipment-parc";
import ShipmentsConsolidationAllPa from "./pages/shipments-consolidation-all-pa";
import ShipmentsDeConsolidationInt from "./pages/shipments-de-consolidation-int";
import ShipmentsReturnShipmentSele from "./pages/shipments-return-shipment-sele";
import ShipmentsConsolidationSelect from "./pages/shipments-consolidation-select";
import ShipmentsDeConsolidationSel from "./pages/shipments-de-consolidation-sel";
import ShipmentsDeConsolidationEac from "./pages/shipments-de-consolidation-eac";
import ShipmentsPrintReturnShippin from "./pages/shipments-print-return-shippin";
import ShipmentsConsolidationPrint from "./pages/shipments-consolidation-print";
import ShipmentsReturnShipmentChos from "./pages/shipments-return-shipment-chos";
import ShipmentsConsolidationChose from "./pages/shipments-consolidation-chose";
import ShipmentsViewAllShipments from "./pages/shipments-view-all-shipments";
import ParcelsAllParcels from "./pages/parcels-all-parcels";
import SignInPage from "./pages/sign-in-page";
import ParcelsTrackSingleParcels from "./pages/parcels-track-single-parcels";
import ParcelsTrackParcelMain from "./pages/parcels-track-parcel-main";
import ShipmentsDeConsolidationMai from "./pages/shipments-de-consolidation-mai";
import ShipmentsTrackShipmentView from "./pages/shipments-track-shipment-view";
import ShipmentsTrackShipmentMain from "./pages/shipments-track-shipment-main";
import BranchesAddBranch from "./pages/branches-add-branch";
import BranchesViewAllBranchesMai from "./pages/branches-view-all-branches-mai";
import ReportsReports from "./pages/reports-reports";
import DashboardMain from "./pages/dashboard-main";
import UserAddUser from "./pages/user-add-user";
import UpdateProfileMain from "./pages/update-profile-main";
import BookAPacketMain from "./pages/book-a-packet-main";
import BookAPacketShippingCalcula from "./pages/book-a-packet-shipping-calcula";
import BookAPacketPayCharges from "./pages/book-a-packet-pay-charges";
import BookAPacketPrintShippingL from "./pages/book-a-packet-print-shipping-l";
import TrackReturnShipmentDetails1 from "./pages/track-return-shipment-details1";
import TrackShipment from "./pages/track-shipment";
import ReturnShipmentLabel from "./pages/return-shipment-label";
import ReturnShipmentMain from "./pages/return-shipment-main";
import TrackReturnShipmentDetails from "./pages/track-return-shipment-details";
import TrackShipmentMain from "./pages/track-shipment-main";
import BookAPacketPickup from "./pages/book-a-packet-pickup";
import BookAPacketSelectPickupD from "./pages/book-a-packet-select-pickup-d";
import BookAPacketOverview from "./pages/book-a-packet-overview";
import UsersMain from "./pages/users-main";
import ManageShipmentsMain from "./pages/manage-shipments-main";
import ReportMain from "./pages/report-main";
import AboutPageMain from "./pages/about-page-main";
import ContactPageMain from "./pages/contact-page-main";
import ChoseWayToSignIn from "./pages/chose-way-to-sign-in";
import SigninMain from "./pages/signin-main";
import SelectAccountType from "./pages/select-account-type";
import CreateNewAccountMain from "./pages/create-new-account-main";
import ForgotPasswordMain from "./pages/forgot-password-main";
import DashboardDashboardMain from "./pages/dashboard-dashboard-main";
import MemberAddMember from "./pages/member-add-member";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/member-view-member":
        title = "";
        metaDescription = "";
        break;
      case "/profile-edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/profile-update-profile-pic":
        title = "";
        metaDescription = "";
        break;
      case "/profile-update-password":
        title = "";
        metaDescription = "";
        break;
      case "/member-view-all-members-main":
        title = "";
        metaDescription = "";
        break;
      case "/parcels-all-parcels-main":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-return-shipment-parcels-main":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-consolidation-all-parcels-main":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-deconsolidation-into-packages":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-return-shipment-select-courier":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-consolidation-select-courier":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-deconsolidation-select-courier":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-deconsolidation-each-shipment":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-print-return-shipping-label":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-consolidation-print-shipping-label":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-return-shipment-chose-individual-country":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-consolidation-chose-individual-country":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-view-all-shipments":
        title = "";
        metaDescription = "";
        break;
      case "/parcels-all-parcels":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/parcels-track-single-parcels":
        title = "";
        metaDescription = "";
        break;
      case "/parcels-track-parcel-main":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-deconsolidation-main":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-track-shipment-view-track-shipment":
        title = "";
        metaDescription = "";
        break;
      case "/shipments-track-shipment-main":
        title = "";
        metaDescription = "";
        break;
      case "/branches-add-branch":
        title = "";
        metaDescription = "";
        break;
      case "/branches-view-all-branches-main":
        title = "";
        metaDescription = "";
        break;
      case "/reports-reports":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-main":
        title = "";
        metaDescription = "";
        break;
      case "/user-add-user":
        title = "";
        metaDescription = "";
        break;
      case "/update-profile-main":
        title = "";
        metaDescription = "";
        break;
      case "/book-a-packet-main":
        title = "";
        metaDescription = "";
        break;
      case "/book-a-packet-shipping-calculator":
        title = "";
        metaDescription = "";
        break;
      case "/book-a-packet-pay-charges":
        title = "";
        metaDescription = "";
        break;
      case "/book-a-packet-print-shipping-label":
        title = "";
        metaDescription = "";
        break;
      case "/track-return-shipment-details":
        title = "";
        metaDescription = "";
        break;
      case "/track-shipment":
        title = "";
        metaDescription = "";
        break;
      case "/return-shipment-label":
        title = "";
        metaDescription = "";
        break;
      case "/return-shipment-main":
        title = "";
        metaDescription = "";
        break;
      case "/track-return-shipment-details-main":
        title = "";
        metaDescription = "";
        break;
      case "/track-shipment-main":
        title = "";
        metaDescription = "";
        break;
      case "/book-a-packet-pickup":
        title = "";
        metaDescription = "";
        break;
      case "/book-a-packet-select-pickup-dt":
        title = "";
        metaDescription = "";
        break;
      case "/book-a-packet-overview":
        title = "";
        metaDescription = "";
        break;
      case "/users-main":
        title = "";
        metaDescription = "";
        break;
      case "/manage-shipments-main":
        title = "";
        metaDescription = "";
        break;
      case "/report-main":
        title = "";
        metaDescription = "";
        break;
      case "/about-page-main":
        title = "";
        metaDescription = "";
        break;
      case "/contact-page-main":
        title = "";
        metaDescription = "";
        break;
      case "/chose-way-to-signin":
        title = "";
        metaDescription = "";
        break;
      case "/signin-main":
        title = "";
        metaDescription = "";
        break;
      case "/select-account-type":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-account-main":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-main":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-dashboard-main":
        title = "";
        metaDescription = "";
        break;
      case "/member-add-member":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageMain />} />
      <Route path="/member-view-member" element={<MemberViewMember />} />
      <Route path="/profile-edit-profile" element={<ProfileEditProfile />} />
      <Route
        path="/profile-update-profile-pic"
        element={<ProfileUpdateProfilePic />}
      />
      <Route
        path="/profile-update-password"
        element={<ProfileUpdatePassword />}
      />
      <Route
        path="/member-view-all-members-main"
        element={<MemberViewAllMembersMain />}
      />
      <Route
        path="/parcels-all-parcels-main"
        element={<ParcelsAllParcelsMain />}
      />
      <Route
        path="/shipments-return-shipment-parcels-main"
        element={<ShipmentsReturnShipmentParc />}
      />
      <Route
        path="/shipments-consolidation-all-parcels-main"
        element={<ShipmentsConsolidationAllPa />}
      />
      <Route
        path="/shipments-deconsolidation-into-packages"
        element={<ShipmentsDeConsolidationInt />}
      />
      <Route
        path="/shipments-return-shipment-select-courier"
        element={<ShipmentsReturnShipmentSele />}
      />
      <Route
        path="/shipments-consolidation-select-courier"
        element={<ShipmentsConsolidationSelect />}
      />
      <Route
        path="/shipments-deconsolidation-select-courier"
        element={<ShipmentsDeConsolidationSel />}
      />
      <Route
        path="/shipments-deconsolidation-each-shipment"
        element={<ShipmentsDeConsolidationEac />}
      />
      <Route
        path="/shipments-print-return-shipping-label"
        element={<ShipmentsPrintReturnShippin />}
      />
      <Route
        path="/shipments-consolidation-print-shipping-label"
        element={<ShipmentsConsolidationPrint />}
      />
      <Route
        path="/shipments-return-shipment-chose-individual-country"
        element={<ShipmentsReturnShipmentChos />}
      />
      <Route
        path="/shipments-consolidation-chose-individual-country"
        element={<ShipmentsConsolidationChose />}
      />
      <Route
        path="/shipments-view-all-shipments"
        element={<ShipmentsViewAllShipments />}
      />
      <Route path="/parcels-all-parcels" element={<ParcelsAllParcels />} />
      <Route path="/sign-in-page" element={<SignInPage />} />
      <Route
        path="/parcels-track-single-parcels"
        element={<ParcelsTrackSingleParcels />}
      />
      <Route
        path="/parcels-track-parcel-main"
        element={<ParcelsTrackParcelMain />}
      />
      <Route
        path="/shipments-deconsolidation-main"
        element={<ShipmentsDeConsolidationMai />}
      />
      <Route
        path="/shipments-track-shipment-view-track-shipment"
        element={<ShipmentsTrackShipmentView />}
      />
      <Route
        path="/shipments-track-shipment-main"
        element={<ShipmentsTrackShipmentMain />}
      />
      <Route path="/branches-add-branch" element={<BranchesAddBranch />} />
      <Route
        path="/branches-view-all-branches-main"
        element={<BranchesViewAllBranchesMai />}
      />
      <Route path="/reports-reports" element={<ReportsReports />} />
      <Route path="/dashboard-main" element={<DashboardMain />} />
      <Route path="/user-add-user" element={<UserAddUser />} />
      <Route path="/update-profile-main" element={<UpdateProfileMain />} />
      <Route path="/book-a-packet-main" element={<BookAPacketMain />} />
      <Route
        path="/book-a-packet-shipping-calculator"
        element={<BookAPacketShippingCalcula />}
      />
      <Route
        path="/book-a-packet-pay-charges"
        element={<BookAPacketPayCharges />}
      />
      <Route
        path="/book-a-packet-print-shipping-label"
        element={<BookAPacketPrintShippingL />}
      />
      <Route
        path="/track-return-shipment-details"
        element={<TrackReturnShipmentDetails1 />}
      />
      <Route path="/track-shipment" element={<TrackShipment />} />
      <Route path="/return-shipment-label" element={<ReturnShipmentLabel />} />
      <Route path="/return-shipment-main" element={<ReturnShipmentMain />} />
      <Route
        path="/track-return-shipment-details-main"
        element={<TrackReturnShipmentDetails />}
      />
      <Route path="/track-shipment-main" element={<TrackShipmentMain />} />
      <Route path="/book-a-packet-pickup" element={<BookAPacketPickup />} />
      <Route
        path="/book-a-packet-select-pickup-dt"
        element={<BookAPacketSelectPickupD />}
      />
      <Route path="/book-a-packet-overview" element={<BookAPacketOverview />} />
      <Route path="/users-main" element={<UsersMain />} />
      <Route path="/manage-shipments-main" element={<ManageShipmentsMain />} />
      <Route path="/report-main" element={<ReportMain />} />
      <Route path="/about-page-main" element={<AboutPageMain />} />
      <Route path="/contact-page-main" element={<ContactPageMain />} />
      <Route path="/chose-way-to-signin" element={<ChoseWayToSignIn />} />
      <Route path="/signin-main" element={<SigninMain />} />
      <Route path="/select-account-type" element={<SelectAccountType />} />
      <Route
        path="/create-new-account-main"
        element={<CreateNewAccountMain />}
      />
      <Route path="/forgot-password-main" element={<ForgotPasswordMain />} />
      <Route
        path="/dashboard-dashboard-main"
        element={<DashboardDashboardMain />}
      />
      <Route path="/member-add-member" element={<MemberAddMember />} />
    </Routes>
  );
}
export default App;

