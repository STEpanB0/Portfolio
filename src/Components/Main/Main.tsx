import  React , {FC , useState ,useEffect} from "react";
import "./Main.css";
import Spiral from '../../assets/images/Spiral.png';
import Doodles from '../../assets/images/Doodles.png';
import Person from '../../assets/images/Person.png';
import Ellipse from '../../assets/images/Ellipse.png';
import Arrow from '../../assets/images/Arrow.png';
import Download from '../../assets/images/Download.png';
import languageStore from "../../Store/LanguageStore";
interface MainProps {
    onScrollToContact: () => void; // Определяем тип пропса
}
 const Main:React.FC<MainProps> = ({onScrollToContact}) => {
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
    const handleScrollFixedButton = () => {
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
                        <h1 className="mainTitle">{languageStore.isEnglish? (languageStore.englishLanguage.Frontend):(languageStore.russianLanguage.Frontend)} 
                            <span>{languageStore.isEnglish? (languageStore.englishLanguage.Developer):(languageStore.russianLanguage.Developer)}</span></h1>
                        <div className="buttonWrapper">
                            <button onClick={onScrollToContact} className="mainbutton buttonHire">
                                <p className="textOfButtonHireMe">{languageStore.isEnglish? (languageStore.englishLanguage.HireMe):(languageStore.russianLanguage.HireMe)}</p>
                            </button>
                            <button className="mainbutton buttonDownload">
                                <p className="textOfButtonDownload">{languageStore.isEnglish? (languageStore.englishLanguage.DownloadCV):(languageStore.russianLanguage.DownloadCV)}</p>
                                <img src={Download} alt="" className="imgofButtonDownload" draggable="false" />
                            </button>
                        </div>
                    </div>
                    <div className="mainImg">
                        <img src={Doodles} className="Doodles" alt="" />
                        <img src={Ellipse} className="Ellipse" alt="" />
                        <img src={Person} className="Person" alt="" />
                    </div>
                    <button onClick={handleScrollFixedButton} className="slideDown">
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