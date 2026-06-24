export interface Review {
  name: string;
  text: string;
  platform: 'whatsapp' | 'chat' | 'none';
}

export const academyReviews: Review[] = [
  {
    name: "Savitha Manjunath",
    text: "I learned technical analysis and F&O trading with Ashwini. She cleared all my doubts and had me do paper trading for a week. It was great learning sessions with her.",
    platform: "none"
  },
  {
    name: "Rekha Hs",
    text: "Ashwini’s F&O trading lessons were easy to follow and really helpful. She explained everything clearly and made trading less scary. Thanks to her.",
    platform: "none"
  },
  {
    name: "Pragya Yadav",
    text: "I recently had the pleasure of enrolling in the courses offered by Ashwini Trading Academy, and I can confidently say that it has been an exceptional experience. From the moment I joined, the professionalism and expertise of the instructors were evident. The academy offers a well-structured curriculum that caters to both beginners and advanced traders.",
    platform: "whatsapp"
  },
  {
    name: "Akash",
    text: "Ashwini Trading Academy has transformed my trading skills. The courses are comprehensive and easy to follow, making complex concepts simple. The “Stock Market from Scratch” course built a solid foundation, while the Futures and Options (FNO) Trading lessons offered practical strategies.",
    platform: "chat"
  }
];
