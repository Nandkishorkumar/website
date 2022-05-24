import Header from '@components/Home/header/Header';
import Upperfooter from '@components/Home/Footer/Upperfooter';
import Path from "@components/path/Path";
import Youraccount from '@components/Account/Youraccount';



 const yourAccount = () => {
    return (
      <>
      <Header/>
      <Path/>
      <Youraccount/>
      <Upperfooter/>
      </>
    )
}
export default yourAccount