import SidebarProvider from "./SidebarContext/SidebarProvider";
import SideBarListingProvider from "./SideBarListingContext/SidebarListingProvider";

// Import other created Providers and add them here -
const providers = [SidebarProvider, SideBarListingProvider];

const CombineProviders = (components) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

// Combining multiple providers to single provider - this will be wrapped around App.js
export default CombineProviders(providers);
