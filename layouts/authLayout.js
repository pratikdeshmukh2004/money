import { GoogleOAuthProvider } from "@react-oauth/google";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { useEffect, useState } from "react";
import sheetApiContext from "@/contexts/SheetContext";
import LoaderContext from "@/contexts/LoaderContext";
import Loader from "@/components/Loader";

const AuthLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const loadDoc = async () => {
    console.log("Loading doc and data...");
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      "1DOiNy-BiFPsA_JrYufwV7RXY3GqlYII28iEMlCxyC4Q",
      serviceAccountAuth
    );
    await doc.loadInfo();
    const data = await doc.sheetsByIndex[0].getRows();
    console.log("Doc Loaded: ", data);
    return { data, doc };
  };

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <Loader />}
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
        <sheetApiContext.Provider value={{ loadDoc }}>
          {children}
        </sheetApiContext.Provider>
      </GoogleOAuthProvider>
    </LoaderContext.Provider>
  );
};

export default AuthLayout;
