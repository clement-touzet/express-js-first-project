import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const Providers = ({ children }: React.PropsWithChildren) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
