const portfolios = [
  {
    name: '팜스테이션',
    companyName: '',
    period: '2020.10-2021.03',
    skills: ['React Native', 'styled-component', 'scss', 'Typescript'],
    imageUrl: 'none',
    desc: ' 교회 영상 및 음원을 재생하고 스트리밍하는 앱 프로젝트로서 프론트엔드개발을 담당하였습니다.\nReact native Framework를 기반으로,styled-components를 활용하여 화면을 구현하고,  scroll시 달라지는 UI구현하였습니다.'
  },
  {
    name: '로보리서치(관리자)',
    companyName: '한국투자증권',
    period: '2020.09 - 2020.11',
    skills: ['React', 'scss', 'Fuse'],
    imageUrl: 'none',
    desc: '인공지능(AI)과 빅데이터에 기반으로 자동으로 분석 정보를 제공하는 서비스의 관리자 웹프로젝트의 프론트엔드 개발을 담당하였습니다.\nReact Admin Template인 Fuse를 기반으로, 화면 개발을 진행하였고, highstockchart.js 사용하여 차트를 구현하였고,컴포넌트화 및 모듈화를 진행하였습니다.'
  },
  {
    name: '로보리서치(사용자)',
    companyName: '한국투자증권',
    period: '2020.09 - 2020.11',
    skills: ['html', 'css', 'javascript', 'gulp'],
    imageUrl: 'robo',
    desc: '인공지능(AI)과 빅데이터에 기반으로 자동으로 분석 정보를 제공하는 서비스의 웹 프로젝트 화면개발을 담당하였습니다.\n gulp를 활용하여, 엑셀 데이터를 받아 키값에 맞는 데이터를 javascript로 바인딩 하였습니다.\n highstockchart.js 를 사용하여 차트를 구현하였습니다.'
  },
  {
    name: '사회적가치연구원',
    companyName: 'SK',
    period: '2020.11 - 2021.01',
    skills: ['React', 'Typescript', 'scss', 'html'],
    imageUrl: 'cses',
    desc: '사회적가치연구원이 일반 사용자들과 소통하기위한 채널로, 전문가 칼럼 및 연구자료들을 아카이빙하는 반응형 웹사이트 개발을 담당하였습니다.\nReact framework를 기반으로 sns로그인(카카오/네이버)기능을 구현하였으며, 공유하기(밴드/페이스북/트위터/카카오톡)을 구현하였습니다.\nreact-quill 라이브러리를 활용해 에디터 기능을 구현하였습니다.'
  },
  {
    name: 'STARTNET',
    companyName: 'STARTNET',
    period: '2020.08 - 2021.01',
    skills: ['React Native', 'styled-component', 'scss', 'Typescript'],
    imageUrl: 'startnet',
    desc: '콜렉터, 작가, 갤러리들이 한공간에서 작품을 등록하고 판매 정산할 수 있게 해주는 앱 개발을 담당하였습니다. \nReact native Framework를 기반으로, Deeplink를 활용하여 작품을 공유하고, 작품활동과 판매정보등을 받기 위해 React Native Push Notifications을 적용하였습니다.\n데이터 수집을 위하여, firebase analytics로 앱 접속 및 화면 접근을 통계화 하였습니다.'
  },
  {
    name: 'Acloset',
    companyName: 'ETRI',
    period: '(1차) 2019.08 - 2019-11 \n (2차) 2020.09 - 2020.10',
    skills: ['React Native', 'styled-component', 'scss', 'Typescript'],
    imageUrl: 'acloset',
    desc: '내 옷장을 한눈에 볼수 있도록 편집하고 코디,추천해주는 앱 프로젝트의 프론트엔드개발을 담당하였습니다.\n React native Framework를 기반으로, Cameraroll,Album 등 디바이스내의 미디어에 접근하여 활용하도록 하였으며 ,Custom Calendar Open source를 직접 개발하여 화면을 구현하였습니다. <a href="https://github.com/JIWONPARK1/custom-calendar" target="_blank" >(https://github.com/JIWONPARK1/custom-calendar)</a>'
  },
  {
    name: 'PDS',
    companyName: 'PDS',
    period: '2019.03 - 2019.07',
    skills: ['React', 'Typescript', 'scss', 'html', 'Fuse'],
    imageUrl: 'pds',
    desc: '모니터링 관제 시스템 반응형 사이트 프로젝트의 프론트엔드개발을 담당하였습니다.\nReact Admin Template인 Fuse를 기반으로, 화면 개발을 진행하였고, 실시간으로 업데이트되어야하는 상태를 구현하기위해, redux와 react lifecycle method를 활용하였습니다.'
  },
  {
    name: 'Check care',
    companyName: 'Check care',
    period: '2019.10 - 2020.03',
    skills: ['React', 'Typescript', 'scss', 'html'],
    imageUrl: 'check-care',
    desc: '사용자의 건강상태를 분석하고 관련 음식 및 제품을 추천하는 프로젝트의 프론트엔드개발을 담당하였습니다.\n React 기반으로 pinterest layout형식의 메인페이지는 react-native-masonry-list를 활용하여 구현하였습니다.'
  },
  {
    name: "Let's IPO",
    companyName: 'IR Kudos',
    period: '2019.06 - 2019.11',
    skills: ['Ionic Framework', 'html', 'css', 'javascript'],
    imageUrl: 'ipo',
    desc: 'IPO 현황을 한눈에 볼수 있는 표와 캘린더로 구성된 하이브리드 애플리케이션 프로젝트의 프론트엔드개발을 담당하였습니다.\nAnguar 기반으로, ionic framework와 Typescript를 사용하여,을 구현하였습니다.'
  },
  {
    name: '삶터',
    companyName: '도도원',
    period: '2019.02 - 2019.04',
    skills: ['Ionic Framework', 'html', 'css', 'javascript'],
    imageUrl: 'dodo',
    desc: '현장에서 근무하는 근로자들의 출퇴근 관리 시스템 앱프로젝트의 화면개발을 담당하였습니다.\nIonic framwork를 기반으로 관리자/사용자 앱 화면 개발을 진행하였습니다.'
  },
  {
    name: 'HEDING',
    companyName: '더라이징스타',
    period: '2019.04 - 2019.06',
    skills: ['Ionic Framework', 'html', 'css', 'javascript'],
    imageUrl: 'heding',
    desc: '공고 전달 기반 인재 매칭 플랫폼 앱 프로젝트의 프론트엔드 개발을 담당하였습니다.\ngulp를 활용하여 업무효율화를 높여 반응형 웹페이지 퍼블리싱을 담당하였습니다.'
  },
  {
    name: '넥스트컬쳐',
    companyName: '넥스트컬쳐',
    period: '2019.01 - 2019.02',
    skills: ['html', 'css', 'javascript'],
    imageUrl: 'nextculture',
    desc: '자사 홈페이지 반응형 웹 프로젝트의 화면개발을 담당하였습니다. \nphp기반으로 owlcarousel.js를 활용하여 lazyloading을 구현하였습니다.'
  },
  {
    name: '포비즈코리아',
    companyName: '포비즈코리아',
    period: '2018.07-2018.08',
    skills: ['html', 'css', 'javascript'],
    imageUrl: 'forbiz',
    desc: '자사 홈페이지 반응형 웹 프로젝트의 화면개발을 담당하였습니다. \n php기반으로 스크롤에 따라서 변화되는 인터렉션을 waypoint.js , tweenmax.js를 활용하여 나타냈습니다.'
  },
  {
    name: 'U+데이터충전소',
    companyName: 'LG',
    period: '2017.10-2018.04',
    skills: ['html', 'css', 'javascript'],
    imageUrl: 'lg',
    desc: 'U+LTE 고객의 데이터 관리/충전/선물 전용 앱프로젝트의 화면 개발을 담당하였습니다.\n선물하는 데이터와 수치를 효율적으로 나타내기위해 애니메이션과 차트를 사용하여, 화면 개발을 담당하였습니다.'
  },
  {
    name: 'SK IOT 스마트홈',
    companyName: 'SK',
    period: '2017.11 - 2018.01',
    skills: ['html', 'css', 'javascript'],
    imageUrl: 'sk',
    desc: 'Btv셋탑 및 삼성 기기에 설치하는  앱 프로젝트의 화면 개발을 담당하였습니다. \n html/css/javascipt를 활용하고, 모듈화 작업을 하였습니다.'
  },
  {
    name: 'CJ헬로비전 Alaska',
    companyName: 'CJ',
    period: '2017.08 - 2018.06',
    skills: ['html', 'css', 'javascript'],
    imageUrl: 'hellovision',
    desc: '클라우드시스템을 이용한 IPTV 기반의 웹 어플리케이션 프로젝트의 화면 개발을 담당하였습니다. \n html/css/javascipt를 활용하고, 모듈화 작업을 하였습니다.'
  }
];

const portfolioList = portfolios
  .map(({ name, companyName, period, skills, desc, imageUrl }) => {
    return `<li class="project__item">
        <p class="project__period">${period}</p>
        <img src="../../../assets/images/img-portfolio-${imageUrl}.png" alt="image-portfolio-${imageUrl}"  class="project__thumbnail"/>
        <p class="project__company">${companyName}</p>
        <p class="project__name">${name}</p>
        <p class="project__desc">${desc}</p>
        <ul class="project__skill">
           ${skills
             .map((skill, index) => {
               return `<li class="project__skill--item">${skill}</li>`;
             })
             .join('')}
        </ul>
      </li>`;
  })
  .join('');

document.getElementById('portfolioList').innerHTML = portfolioList;
