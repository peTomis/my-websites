import { useEffect, useState } from "react";
import Header from "../Header";

const HeaderController = () => {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 96 ||
            document.documentElement.scrollTop > 96)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 96 &&
          document.documentElement.scrollTop < 96
        ) {
          console.log(isShrunk);
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll, false);
  }, []);

  return <Header isShrunk={isShrunk} />;
};

export default HeaderController;
