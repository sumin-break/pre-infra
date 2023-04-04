// gtag 사용을 위한 window object 확장
declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageView = (path: string) => {
  window.gtag?.("event", "page_view", {
    page_title: path,
    조회페이지: path,
    send_to: process.env.NEXT_PUBLIC_GA_ID,
  });
};
