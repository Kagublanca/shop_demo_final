import Layout from "../components/layout";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import DealBanner from "../components/DealBanner";
function Index() {
  return (
    <div>
      <Layout />
      <DealBanner />
      <Greeting />
      <Footer />
    </div>
  );
}

export default Index;
