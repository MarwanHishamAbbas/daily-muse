import { ClerkProvider } from "@clerk/nextjs/app-beta";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        elements: {
          rootBox: "mx-auto",
          formButtonPrimary: "text-sm capitalize px-5 py-3",
        },
        variables: {
          colorPrimary: "#7c3aed",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default Provider;
