import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutTitle: 'About us',
        aboutText: 'We are RAZOM!, a new Ukrainian LGBTQIA+ initiative in the Rhine-Ruhr region. We are building a brand of community that stands for strength and solidarity, offering a safe space for people seeking support, understanding, and belonging.',
        volunteerLine1: 'Do you want to build a safe space with us?',
        volunteerLine2: 'Join as a volunteer!',
        calendarTitle: 'Calendar of events',
        categoryAll: 'All',
        categoryInfo: 'Informational',
        categorySocial: 'Social',
        categoryActivism: 'Activism',
        categoryCultural: 'Cultural',
        categoryPsychological: 'Psychological support',
        headerMainTitle: 'Let’s create your safe space',
        headerSubtitle: 'Join our community',
        headerJoin: 'Become a member',
      },
    },
    uk: {
      translation: {
        aboutTitle: 'Про нас',
        aboutText: 'Ми - RAZOM!, нова українська ЛГБТКІ-ініціатива в Рейн-Рурському регіоні. Ми прагнемо створити новий бренд спільноти, який стане символом нашої сили та солідарності. Наша організація – це простір для тих, хто шукає безпеки, розуміння та можливості бути собою серед однодумців.',
        volunteerLine1: 'Хочеш творити безпечний простір разом із нами?',
        volunteerLine2: 'Приєднуйся як волонтер!',
        calendarTitle: 'Календар подій',
        categoryAll: 'Усі',
        categoryInfo: 'Інформаційні',
        categorySocial: 'Соціальні',
        categoryActivism: 'Активізм',
        categoryCultural: 'Культурні',
        categoryPsychological: 'Психологічна допомога',
        headerMainTitle: 'Створімо твій безпечний простір',
        headerSubtitle: 'Приєднуйся до нашого ком’юніті',
        headerJoin: 'Стати учасником',
      },
    },
    de: {
      translation: {
        aboutTitle: 'Über uns',
        aboutText: 'Wir sind RAZOM!, eine neue ukrainische LGBTQIA+-Initiative in der Rhein-Ruhr-Region. Wir schaffen eine Gemeinschaftsmarke, die für Stärke und Solidarität steht. Unser Raum bietet Schutz, Verständnis und die Möglichkeit, man selbst zu sein.',
        volunteerLine1: 'Möchtest du mit uns einen sicheren Raum schaffen?',
        volunteerLine2: 'Werde Freiwilliger!',
        calendarTitle: 'Veranstaltungskalender',
        categoryAll: 'Alle',
        categoryInfo: 'Informativ',
        categorySocial: 'Sozial',
        categoryActivism: 'Aktivismus',
        categoryCultural: 'Kulturell',
        categoryPsychological: 'Psychologische Hilfe',
        headerMainTitle: 'Lass uns deinen sicheren Raum schaffen',
        headerSubtitle: 'Werde Teil unserer Community',
        headerJoin: 'Mitglied werden',
      },
    },
  },
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});
