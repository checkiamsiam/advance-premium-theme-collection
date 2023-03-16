// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/chart/BaseOptionChart";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import {
  Authenticator,
  useTheme,
  View,
  Image,
  Text,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
//import logo from "./images/curaster.svg";
Amplify.configure(awsExports);
const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="curaster logo"
          src="https://curasters3213319-dev.s3.ap-south-1.amazonaws.com/public/Curaster200x200.svg"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          Copyright &copy; 2022. All rights reserved Cred Aster Pvt Ltd.
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to admin account
        </Heading>
      );
    },
  },
};
// ----------------------------------------------------------------------

export default function App() {
  return (
    <Authenticator
      socialProviders={[]}
      hideSignUp={true}
      components={components}
    >
      {({ signOut, user }) => (
        <ThemeProvider>
          <ScrollToTop />
          <BaseOptionChartStyle />
          <Router signOut={signOut} user={user} />
        </ThemeProvider>
      )}
    </Authenticator>
  );
}
