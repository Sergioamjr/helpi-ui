import cx from "classnames";

export default function Chat({
  message,
  onChange,
  onSubmit,
  isButtonDisabled,
  chatHistory,
}) {
  return (
    <div className="h-full pb-7 flex flex-col justify-between">
      <div className="chat-area px-3 flex flex-col overflow-auto">
        {chatHistory.map((chat, index) => {
          const messageTextClasses = cx({
            "text-gray-700 bg-blue-100 rounded-bl-none": !chat.isUser,
            "bg-blue-500 text-white rounded-br-none": chat.isUser,
          });

          const messageContainerClasses = cx({
            "self-start": !chat.isUser,
            "self-end": chat.isUser,
          });

          const messageHourClasses = cx({
            "text-left": !chat.isUser,
            "text-right": chat.isUser,
          });

          return (
            <div key={index} className={`mb-4 ${messageContainerClasses}`}>
              <p
                className={`rounded-xl p-2 text-base  max-w-xs mb-1 w-full ${messageTextClasses}`}
              >
                {chat.message}
              </p>
              <p
                className={`w-full text-gray-500 text-xs ${messageHourClasses}`}
              >
                5:22
              </p>
            </div>
          );
        })}
      </div>

      <form className="flex gap-2 px-3">
        <textarea
          onChange={onChange}
          value={message}
          className="w-full h-20 border border-gray-300 rounded p-2"
        />
        <button
          type="submit"
          onClick={onSubmit}
          disabled={!message || isButtonDisabled}
          className="bg-gray-700 text-white rounded px-4 transition-colors disabled:bg-gray-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
