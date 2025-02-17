import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Space, Typography } from "antd";
import { Theme, PreferencesContext } from "api/contexts/Preferences";
import Search from "components/Search";
import { Tracker } from "components/utils/analytics";

const { Text, Title } = Typography;

const Banner: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = React.useContext(PreferencesContext);

  return (
    <div
      className="home-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "-12px -12px 12px -12px",
        backgroundColor: theme === Theme.DARK ? "#121212" : "#4A90E2",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "18px",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <img
          alt="Nano block explorer"
          height="60px"
          src={`/nyano-logo-${theme === Theme.DARK ? "dark" : "light"}.png`}
          style={{ marginRight: "12px" }}
        />
        <Title
          level={3}
          style={{
            display: "inline-block",
            color: "#fff",
            margin: 0,
            fontWeight: 500,
            fontSize: "28px",
            whiteSpace: "nowrap",
          }}
        >
          {t("common.blockExplorer")}
        </Title>
      </div>

      <div style={{ marginBottom: "22px" }}>
        <Search isHome />
      </div>

      <Space size={[6, 12]} wrap style={{ justifyContent: "center" }}>

      <Button
          ghost
          href="https://nyano.org/"
          target="_blank"
          style={{ padding: "0 10px" }}
          onClick={() => {
            Tracker.ga4?.gtag("event", "nyano.org");
          }}
        >
          Nyano.org
        </Button>

        <Button
          ghost
          href="https://nyault.thomiz.dev/"
          target="_blank"
          style={{ padding: "0 10px" }}
          onClick={() => {
            Tracker.ga4?.gtag("event", "nyault");
          }}
        >
          Nyault wallet
        </Button>

        <Button
          ghost
          href="https://freenyanofaucet.com/"
          target="_blank"
          style={{ padding: "0 10px" }}
          onClick={() => {
            Tracker.ga4?.gtag("event", "nyault");
          }}
        >
          Free Nyano Faucet
        </Button>

      </Space>
    </div>
  );
};

export default Banner;
