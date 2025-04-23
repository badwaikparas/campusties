import React, { useState } from "react";
// import "./Chat.css"; // Add styling if required

const Chat = () => {

  // return (

  const communities = [
    {
      name: "GFG",
      // people: [
      //   { name: "O Coding", lastMsg: "A Coding? Please work for you...", time: "10:30 AM" },
      //   { name: "Technical Club", lastMsg: "What are you up?", time: "9:15 AM", bold: true }
      // ]
      items: [
        { id: 1, title: "O Coding", lastMsg: "A Coding? Please work for you. In...", time: "10:30 AM" },
        { id: 2, title: "Dance Club", lastMsg: "I am featured and I am listening for...", time: "9:15 AM" },
        { id: 3, title: "TINN", lastMsg: "But I'll stay in jail.", time: "Yesterday" },
        { id: 6, title: "Technical Club", lastMsg: "What are you up?", time: "Wednesday", bold: true },
        { id: 7, title: "Design Club", lastMsg: "Everyone goes to the market.", time: "Tuesday", bold: true }
      ]
    },
    {
      name: "Dance Club",
      items: [
        { id: 4, title: "Doctrice Black", lastMsg: "Who can be a new project?", time: "Yesterday", unread: true },
        { id: 5, title: "Brandon Wilson", lastMsg: "I am featured and entertaining for...", time: "Tuesday" },
        { id: 8, title: "Kyle Fisher", lastMsg: "But I'm staying in jail.", time: "Monday", bold: true },
        { id: 9, title: "Audrey Alexander", lastMsg: "When you get it?", time: "Sunday", bold: true }
      ]
      // people: [
      //   { name: "Member 1", lastMsg: "Practice at 5pm", time: "Yesterday" },
      //   { name: "Member 2", lastMsg: "Costume ideas...", time: "Tuesday" }
      // ]
    }

    // {
    //   name: "TINN",
    //   people: [
    //     { name: "Admin", lastMsg: "Meeting tomorrow", time: "Monday", bold: true }
    //   ]
    // }

  ];

  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      // Add message sending logic here
      console.log(`Sent to ${selectedChat}: ${message}`);
      setMessage('');
    }
  };

    return (
      <div className="flex h-screen bg-gray-100">
        {/* Left Sidebar - Communities (1/4 width) */}
        <div className="w-1/4 bg-white mx-1 my-2 rounded-lg shadow-sm">
          <div className="p-3 border-b">
            <h1 className="text-xl font-bold">COMMUNITIES</h1>
          </div>

          <div className="p-2 ">
            {communities.map((community, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-2 mb-3"> {/*Added block styling*/}
                <h2 className="font-semibold p-2 bg-gray-50 rounded-t-lg">{community.name}</h2> {/* Added block styling */}

                <div className="divide-y"> {/* Dividers between items */}
                  {community.items.map(item => (
                    <div
                      key={item.id}
                      className={`p-3 hover:bg-gray-50 cursor-pointer mb-1 ${selectedCommunity === item.id ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedCommunity(item.id)}
                    >
                      <div className="flex justify-between">
                        {/* <h3 className="font-medium">{item.title}</h3> */}
                        <h3 className={`${item.bold ? 'font-bold' : 'font-medium'}`}>{item.title}</h3>
                        <span className="text-xs text-gray-500">{item.time}</span>
                      </div>
                      <p className={`text-sm truncate ${item.unread ? 'font-semibold text-black' : 'text-gray-600'}`}>
                        {item.lastMsg}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section - Chats (1/3 width) */}
        <div className="w-1/3 bg-white mx-1 my-2 rounded-lg shadow-sm">
          <div className="p-3 border-b">
            <h1 className="text-xl font-bold">CHATS</h1> {/* Clear Chats heading */}
          </div>

          {selectedCommunity ? (
            <div className="bg-white rounded-lg shadow-sm p-2"> {/*Added block styling*/}
              {/* <> */}
              {/* <div className="p-3 border-b bg-gray-50">
                  <h2 className="font-semibold">Chats in {communities.find(c => c.items.some(i => i.id === selectedCommunity))?.name}</h2>
                </div> */}
              {communities
                .find(c => c.items.some(i => i.id === selectedCommunity))
                ?.items.map(item => (
                  <div
                    key={item.id}
                    className={`p-3 border-b hover:bg-gray-50 cursor-pointer ${selectedChat === item.id ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedChat(item.id)}
                  >
                    {/* <h3 className="font-medium">{item.title}</h3> */}
                    <h3 className={`${item.bold ? 'font-bold' : 'font-medium'}`}>{item.title}</h3>
                    <p className="text-sm text-gray-600 truncate">{item.lastMsg}</p>
                  </div>
                ))}
            </div>
            // </>
          ) : (
            <div className="p-4 text-gray-500 text-center">
              Select a community to view chats
            </div>
          )}
        </div>

        {/* Right Section - Messages (remaining width) */}
        <div className="flex-1 flex flex-col mx-1 my-2 bg-gray-50">
          {selectedChat ? (
            <>
              <div className="bg-white border-b rounded-t-lg shadow-sm p-3"> {/* White block with shadow */}
                {/* <div className="p-4 border-b bg-white"> */}
                <h2 className="font-semibold text-lg">
                  {communities
                    .flatMap(c => c.items)
                    .find(i => i.id === selectedChat)?.title}
                </h2>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto "> {/* White message bubble */}
                <div className="space-y-2">
                  {/* Sample received message */}
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-lg max-w-xs shadow">
                      <p>Hope, they kicked me out of the office!</p>
                      <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                    </div>
                  </div>

                  {/* Sample sent message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-100 p-3 rounded-lg max-w-xs shadow">
                      <p>Wow! I can invite you to my new project.We need a product designer right now!</p>
                      <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-lg max-w-xs shadow-sm">
                      <p>It'll be great! I need this job, but...</p>
                      <p className="text-xs text-gray-500 mt-1">10:33 AM</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Message Input */}
              <div className="bg-white p-4 border-t rounded-b-lg shadow-sm">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message"
                    className="flex-1 border rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  // onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button
                    onClick={() => {
                      if (message.trim()) {
                        console.log(`Message sent: ${message}`);
                        setMessage('');
                      }
                    }}
                    className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
  );
};

export default Chat;





























// import React, { useState } from "react";

// // Import your community icons (replace with actual image paths)
// import GFGIcon from '../../Assets/chatIcons/gfg';
// import DanceClubIcon from '../../Assets/chatIcons/dance-club';
// import THMIcon from '../../Assets/chatIcons/THM';
// import CodebreakersIcon from '../../Assets/chatIcons/Codebreakers';

// const Chat = () => {
//   // Community data with icons
//   const communities = [
//     {
//       id: 1,
//       name: "GFG",
//       // icon: GFGIcon,
//       description: "Why have your project?",
//       people: [
//         {
//           id: 101,
//           name: "Alex Johnson",
//           lastMsg: "Meeting at 3 PM tomorrow",
//           time: "10:30 AM",
//           unread: true
//         },
//         {
//           id: 102,
//           name: "Sam Wilson",
//           lastMsg: "Did you see the new design?",
//           time: "9:15 AM"
//         }
//       ]
//     },
//     {
//       id: 2,
//       name: "Dance Club",
//       // icon: DanceClubIcon,
//       description: "I am featured and I am listening for...",
//       people: [
//         {
//           id: 201,
//           name: "Maria Garcia",
//           lastMsg: "Practice session tomorrow",
//           time: "Yesterday"
//         },
//         {
//           id: 202,
//           name: "James Smith",
//           lastMsg: "Costumes arrived!",
//           time: "Tuesday",
//           unread: true
//         }
//       ]
//     },
//     {
//       id: 3,
//       name: "THM",
//       // icon: THMIcon,
//       description: "But I'll stay in jail.",
//       people: [
//         {
//           id: 301,
//           name: "Emma Brown",
//           lastMsg: "Feedback on the mockups",
//           time: "Yesterday"
//         },
//         {
//           id: 302,
//           name: "Lucas Lee",
//           lastMsg: "Color scheme approved",
//           time: "Monday"
//         }
//       ]
//     },
//     {
//       id: 4,
//       name: "Codebreakers",
//       // icon: CodebreakersIcon,
//       description: "Everyone goes to the market.",
//       people: [
//         {
//           id: 401,
//           name: "Chris Taylor",
//           lastMsg: "New challenge posted",
//           time: "2 hours ago",
//           unread: true
//         },
//         {
//           id: 402,
//           name: "Jordan Miller",
//           lastMsg: "Solved the encryption",
//           time: "1 hour ago"
//         }
//       ]
//     }
//   ];

//   // Sample chat messages
//   const sampleMessages = {
//     101: [
//       { text: "Hope, they kicked me out of the office!", time: "10:30 AM", sent: false },
//       { text: "Wow! I can invite you to my new project.", time: "10:32 AM", sent: true },
//       { text: "It'll be great! I need this job, but...", time: "10:33 AM", sent: false },
//       { text: "So, it's up to you!", time: "10:34 AM", sent: true }
//     ],
//     // Add messages for other people...
//   };

//   const [selectedCommunity, setSelectedCommunity] = useState(null);
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleSendMessage = () => {
//     if (message.trim() && selectedPerson) {
//       // In a real app, you would add this to your state
//       console.log(`Message sent to ${selectedPerson.name}: ${message}`);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Left Panel - Communities */}
//       <div className="w-1/4 bg-white border-r border-gray-200">
//         <div className="p-4 border-b border-gray-200">
//           <h1 className="text-xl font-bold">COMMUNITIES</h1>
//         </div>
//         <div className="overflow-y-auto">
//           {communities.map((community) => (
//             <div
//               key={community.id}
//               className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-center ${
//                 selectedCommunity?.id === community.id ? 'bg-blue-50' : ''
//               }`}
//               onClick={() => {
//                 setSelectedCommunity(community);
//                 setSelectedPerson(null);
//               }}
//             >
//               <img 
//                 src={GFGIcon.icon} 
//                 alt={GFG.name}
//                 className="w-10 h-10 rounded-full object-cover mr-3"
//               />
//               <div>
//                 <h2 className="font-semibold">{community.name}</h2>
//                 <p className="text-sm text-gray-600 truncate">
//                   {community.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Middle Panel - People in Community */}
//       <div className="w-1/3 bg-white border-r border-gray-200">
//         {selectedCommunity ? (
//           <>
//             <div className="p-4 border-b border-gray-200 flex items-center">
//               <img 
//                 src={selectedCommunity.icon} 
//                 alt={selectedCommunity.name}
//                 className="w-10 h-10 rounded-full object-cover mr-3"
//               />
//               <div>
//                 <h1 className="text-xl font-bold">{selectedCommunity.name}</h1>
//                 <p className="text-sm text-gray-500">
//                   {selectedCommunity.people.length} members
//                 </p>
//               </div>
//             </div>
//             <div className="overflow-y-auto">
//               {selectedCommunity.people.map((person) => (
//                 <div
//                   key={person.id}
//                   className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-center ${
//                     selectedPerson?.id === person.id ? 'bg-blue-50' : ''
//                   }`}
//                   onClick={() => setSelectedPerson(person)}
//                 >
//                   <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
//                     <span className="text-lg">
//                       {person.name.charAt(0).toUpperCase()}
//                     </span>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="flex justify-between">
//                       <h3 className={`font-medium ${
//                         person.unread ? 'font-semibold text-black' : ''
//                       }`}>
//                         {person.name}
//                       </h3>
//                       <span className="text-xs text-gray-500">
//                         {person.time}
//                       </span>
//                     </div>
//                     <p className={`text-sm truncate ${
//                       person.unread ? 'font-semibold text-black' : 'text-gray-600'
//                     }`}>
//                       {person.lastMsg}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center justify-center h-full text-gray-500">
//             Select a community
//           </div>
//         )}
//       </div>

//       {/* Right Panel - Chat with Selected Person */}
//       <div className="flex-1 flex flex-col bg-gray-50">
//         {selectedPerson ? (
//           <>
//             <div className="p-4 border-b border-gray-200 bg-white flex items-center">
//               <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
//                 <span className="text-lg">
//                   {selectedPerson.name.charAt(0).toUpperCase()}
//                 </span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg">{selectedPerson.name}</h2>
//                 <p className="text-xs text-gray-500">
//                   Last seen today at {selectedPerson.time}
//                 </p>
//               </div>
//             </div>
            
//             {/* Messages Area */}
//             <div className="flex-1 overflow-y-auto p-4">
//               <div className="space-y-3">
//                 {(sampleMessages[selectedPerson.id] || []).map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`flex ${
//                       msg.sent ? 'justify-end' : 'justify-start'
//                     }`}
//                   >
//                     <div
//                       className={`p-3 rounded-lg max-w-xs shadow ${
//                         msg.sent ? 'bg-blue-100' : 'bg-white'
//                       }`}
//                     >
//                       <p>{msg.text}</p>
//                       <p className="text-xs text-gray-500 mt-1 text-right">
//                         {msg.time}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Message Input */}
//             <div className="p-4 border-t border-gray-200 bg-white">
//               <div className="flex items-center">
//                 <input
//                   type="text"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                   placeholder="Write your message"
//                   className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center justify-center h-full text-gray-500">
//             {selectedCommunity ? "Select a person to chat" : "Select a community"}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;
















































