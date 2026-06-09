import Footer from '../../components/Footer';
import PlatformOverview from '../../components/Products/PlatformOverview';
import TechnologyArchitecture from '../../components/Products/TechnologyArchitecture';
import DeploymentFlexibility from '../../components/Products/DeploymentFlexibility';
import LongTermPartnership from '../../components/Products/LongTermPartnership';

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12">
      <div className="w-full max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="mt-4 text-lg text-white/80">
            Explore our platform features and how they support your growth.
          </p>
        </header>

        <div className="space-y-10">
          <PlatformOverview />
          <TechnologyArchitecture />
          <DeploymentFlexibility />
          <LongTermPartnership />
        </div>

        <div className="mt-16 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
