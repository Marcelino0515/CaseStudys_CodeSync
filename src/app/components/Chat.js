import dynamic from 'next/dynamic';

const FullPageChat = dynamic(() => import('flowise-embed-react').then(mod => mod.FullPageChat), {
  ssr: false
});

const Chat = () => {
  return (
    <div className="hero-chat mx-850">
      <FullPageChat
        chatflowid="69cb9bf6-3c52-46a3-b311-fa7bd0421351"
        apiHost="https://flow.codesync.sa"
        chatflowConfig={{
          headers: {
            Authorization: "Bearer JzG68MG9qu2YNhcJYJN4sfYTBNxpU0mw31-_L1ghAxM", // Replace with your actual token
          },
        }}
        observersConfig={{
          /* Observers Config */
        }}
        theme={{
          button: {
            backgroundColor: '#3B81F6',
            right: 20,
            bottom: 20,
            size: 48,
            dragAndDrop: false,
            iconColor: 'white',
            customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
            autoWindowOpen: {
              autoOpen: false,
              openDelay: 2,
              autoOpenOnMobile: false
            }
          },
          tooltip: {
            showTooltip: false,
            tooltipMessage: 'Hi There 👋!',
            tooltipBackgroundColor: 'black',
            tooltipTextColor: 'white',
            tooltipFontSize: 16
          },
          customCSS: `
                      .chatbot-container{
                        height:50vh !important;
                    }
                    .chatbot-chat-view {
                        padding-top: 0px !important;
                    }
                    .chatbot-container > div > span:last-child{
                        display:none;
                    }
                        
                    .chatbot-container > div> .chatbot-chat-view{
                        padding-left: 0;
                        padding-right:0;
                    }
                    .chatbot-container > div > div.px-5{
                        padding-left:0 !important;
                        padding-right:0 !important;
                    }
                    .chatbot-container > div> .chatbot-chat-view + div{
                        padding-left: 0;
                        padding-right:0;
                    }
                    .border-\[\#eeeeee\] {
                        --tw-border-opacity: .2;
                        border-color: rgb(238 238 238/var(--tw-border-opacity)) !important;
                    }
                    .chatbot-input.border {
                        border-width: 1px;
                        border-color: rgba(255, 255, 255, 0.1) !important;
                    }
                    .chatbot-button{
                        background:rgba(255,255,255,0.7) !important;
                        margin:.6rem !important;
                        padding:10px !important;
                        height: inherit !important;
                    }

                    .host-container.items-start > .chatbot-host-bubble{
                        background-color: rgba(255,255,255,0.2) !important;
                        color: rgba(255,255,255,0.7) !important;
                    }
                  `,
          chatWindow: {
            showTitle: false,
            showAgentMessages: false,
            title: 'Codesync Bot',
            sourceDocsTitle: '',
            titleAvatarSrc: '/img/logo_icon_light.svg',
            welcomeMessage: 'Welcome! 👋 How can I make your day better? Ask me anything!',
            errorMessage: 'Hmm... something’s not right. Let’s try that again! Need help? Codesync is here! 💡',
            backgroundColor: 'rgba(0,0,0,0)',
            backgroundImage: '',
            height: '100%',
            width: '100%',
            fontSize: 14,
            starterPrompts: [
              "",
              ""
            ],
            starterPromptFontSize: 15,
            clearChatOnReload: true,
            renderHTML: true,
            botMessage: {
              backgroundColor: 'rgba(0, 0, 0, 0)',
              textColor: 'var(--light-500)',
              showAvatar: true,
              avatarSrc: '/img/logo_icon_light.svg'
            },
            userMessage: {
              backgroundColor: 'rgba(255,255,255,.2)',
              textColor: 'var(--light-500)',
              showAvatar: true,
              avatarSrc: '/img/user.svg'
            },
            textInput: {
              placeholder: 'Type your question',
              backgroundColor: 'rgba(255,255,255,0.05)',
              textColor: 'var(--light-500)',
              sendButtonColor: 'rgba(0,0,0,1)',
              maxChars: 50,
              maxCharsWarningMessage: 'You exceeded the character limit. Please input less than 50 characters.',
              autoFocus: true,
              sendMessageSound: true,
              sendSoundLocation: '/sound/send_message.mp3',
              receiveMessageSound: true,
              receiveSoundLocation: '/sound/receive_message.mp3'
            },
            feedback: {
              color: '#303235'
            },
            dateTimeToggle: {
              date: true,
              time: true
            },
            footer: {
              textColor: '#303235',
              text: '',
              company: '',
              companyLink: ''
            }
          }
        }}
      />
    </div>
  );
};

export default Chat;