import  React , {FC , useState ,useEffect} from "react";
import "./Main.css";
import Spiral from '../../assets/images/Spiral.png';
import Doodles from '../../assets/images/Doodles.png';
import Person from '../../assets/images/Person.png';
import Ellipse from '../../assets/images/Ellipse.png';
import Arrow from '../../assets/images/Arrow.png';
import Download from '../../assets/images/Download.png';
 const Main:FC = () => {
    const [canScrollDown, setCanScrollDown] = useState<boolean>(true)
    const checkScrollPosition = () => {
        // Получаем высоту страницы и высоту окна
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        // Проверяем, достигнут ли конец страницы
        setCanScrollDown(scrollTop + windowHeight  < documentHeight);
    };
    useEffect(() => {
        // Добавляем обработчик события прокрутки
        window.addEventListener('scroll', checkScrollPosition);
        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    });
    const handleScroll = () => {
        if (canScrollDown) {
            window.scrollBy({
                top: 1000, // количество пикселей для прокрутки вниз
                behavior: 'smooth' // плавная прокрутка
            });
        }
        else{
            window.scrollBy({
                top: -100000, // количество пикселей для прокрутки вниз
                behavior: 'smooth' // плавная прокрутка
            });
        }
        // Прокрутка страницы вниз на 100 пикселей

    };
    console.log(canScrollDown)
    return (
        <main className="main">
            <div className="container">
                <div className="mainInfo">
                    <img className="spiral" src={Spiral} alt="" draggable="false" />
                    <div className="maininfoblock">
                        <h1 className="mainTitle">Frontend <span>Developer</span></h1>
                        <div className="buttonWrapper">
                            <button className="mainbutton buttonHire">
                                <p className="textOfButtonHireMe">Hire Me</p>
                            </button>
                            <button className="mainbutton buttonDownload">
                                <p className="textOfButtonDownload">Download CV</p>
                                <img src={Download} alt="" className="imgofButtonDownload" draggable="false" />
                            </button>
                        </div>
                    </div>
                    <div className="mainImg">
                        <img src={Doodles} className="Doodles" alt="" />
                        <img src={Ellipse} className="Ellipse" alt="" />
                        <img src={Person} className="Person" alt="" />
                    </div>
                    <button onClick={handleScroll} className="slideDown">
                        {
                            canScrollDown?(
                                <img src={Arrow} alt="" className="arrowOfButtonSlideDown"draggable="false" />
                            ):(
                                <img src={Arrow} alt="" className="arrowOfButtonSlideDown transform"draggable="false" />
                            )
                        }
                    </button>
                    
                </div>
                
            </div>
        </main>
    );
}
export default Main;