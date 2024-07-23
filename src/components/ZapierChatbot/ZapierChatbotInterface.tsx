import { ChatbotHeader } from "./ChatbotHeader";
import styles from "./ZapierChatbotInterface.module.scss";

export function ZapierChatbotInterface() {
  return (
    <div className={styles.chatbotWrapper}>
      <ChatbotHeader />
      <iframe
        title="ChatBot"
        src="https://interfaces.zapier.com/embed/chatbot/clydyeiqj00e2sj6wqhtz2upl"
        allow="clipboard-write *"
        className={styles.chatbotContainer}
        // referrerPolicy="origin-when-cross-origin"
        // referrerPolicy="strict-origin-when-cross-origin"
        // referrerPolicy="unsafe-url"
      />
    </div>
    // <iframe
    //   src="https://interfaces.zapier.com/embed/chatbot/clydyeiqj00e2sj6wqhtz2upl"
    //   height="600px"
    //   width="400px"
    //   allow="clipboard-write *"
    // />
  );
}
