import { makeAutoObservable } from 'mobx';

class LanguageStore {
    readonly russianLanguage: { [key: string]: any };
    readonly englishLanguage: { [key: string]: any };
    isEnglish: boolean;
    constructor() {
        // Инициализация объекта данных
        this.englishLanguage = {
            logo: 'Crafted Creations',
            Home: 'Home',
            AboutMe: 'About Me',
            Contact: 'Contact',
            language: 'Language',
            Frontend: 'Frontend ',
            Developer: 'Developer',
            HireMe: 'Hire Me',
            DownloadCV: 'Download CV',
            About: 'About',
            me: 'me',
            textAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
            readmore: 'readmore',
            titleOfWorks: 'My',
            titleOfWorksSpan: 'works',
            titleofFormSection: 'Got a project in ',
            titleofFormSectionSpan: 'mind?',
            inputLabelOfName: 'Your name?',
            inputName: 'Name',
            inputLabelOfEmail: 'Your email?',
            inputEmail: 'Email',
            labelOfTeaxtarea: 'Your Message',
            textarea: 'Message',
            textOfButtonSendMessage: 'Send Message',
            english: 'English',
            russian: 'Russian',
            
        };
        this.russianLanguage = {
            logo: 'Созданные творения',
            Home: 'Главная',
            AboutMe: 'Обо мне',
            Contact: 'Контакт',
            language: 'Язык',
            Frontend: 'Фронтенд ',
            Developer: 'Разработчик',
            HireMe: 'Нанять меня',
            DownloadCV: 'Скачать резюме',
            About: 'Обо ',
            me: 'мне',
            textAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
            readmore: 'Читать далее',
            titleOfWorks: 'Мои ',
            titleOfWorksSpan: 'работы',
            titleofFormSection: 'Есть проект на ',
            titleofFormSectionSpan: 'примете?',
            inputLabelOfName: 'Ваше имя',
            inputName: 'Имя',
            inputLabelOfEmail: 'Ваш email?',
            inputEmail: 'Email',
            labelOfTeaxtarea: 'Ваше сообщение',
            textarea: 'Сообщение',
            textOfButtonSendMessage: 'Отправить',
            english: 'Английский',
            russian: 'Русский',
        };
        this.isEnglish = true;

        // Автоматическая обработка наблюдаемых свойств
        makeAutoObservable(this);
    }
}

const languageStore = new LanguageStore();
export default languageStore;