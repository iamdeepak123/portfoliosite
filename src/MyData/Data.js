import ecom_img from "../images/Ecomm.png";
import chatimg from "../images/Chat_Image.png"
import digical from "../images/digical.png"
import Todoimg from "../images/TodoApp.png"
import messanger from "../images/MessageApp.png"



const data = [
    {
        id: 1,
        name: "E-Commerce-App",
        codelink: "https://github.com/iamdeepak123/my_ecomm_website",
        projectlink: "https://my-ecomm-website.vercel.app/",
        image: ecom_img,
        Description: "This is an E-Commerce website using React, HTML, CSS and Firebase for authentication. It has features like Product Listings, “Add to Cart” Functionality with selected color and quantity, Google Authentication, Checkout Process. Cart list items is stored at localstorage. The design is fully Responsive for mobile and laptop devices. Cart pAge display product details (name, quantity, price) in the cart and Allow users to adjust quantities or remove items.",
        language: "React-JS",
        featured: true,
    },

    {
        id: 2,
        name: "Chat-Room-App",
        codelink: "https://github.com/iamdeepak123/my-react-chatapp",
        projectlink: "https://my-react-chatapp.vercel.app/",
        image: chatimg,
        Description: "This is Chat Room app where you can login using google or create an new account using email/password. It has Real-time chat functionality , Google sign-in using Firebase Authentication. and Chatroom messages stored in Firebase's Cloud Firestore. You have just have to login and enter the chat room Name of your choice and share the same with other, and start chatting with other. This app is fully Responsive for mobile and laptop",
        language: "TypeScript",
        featured: true,
    },
 
    {
        id: 3,
        name: "Messenger-App",
        codelink: "https://github.com/iamdeepak123/k-messenger",
        projectlink: "https://k-messenger-gold.vercel.app/",
        image: messanger,
        Description: "This is a chatting app, simliar to whatsapp. It has a feature of email/password authentication. User can chat with multiple person and the chat record is saved in firestore database, it has logout button and many more features will be added to this app.",
        language: "React-JS",
        featured: true,
    },
    {
        id: 4,
        name: "ToDoList-React-App",
        codelink: "https://github.com/iamdeepak123/TodoList-React",
        projectlink: "https://todo-list-react-omega-five.vercel.app/",
        image: Todoimg,
        Description: "ToDo list app built using React it has Features like Add New Task, Users can input and add new tasks to their list, Delete Task: Tasks can be removed from the list. user task will be store in local storage. You can also mark task as completed and it will move from todo list to Completed list ",
        language: "React-JS",
        featured: true,
    },

    {
        id: 5,
        name: "Digital-Calculator",
        codelink: "https://github.com/iamdeepak123/digital_calculator",
        projectlink: "https://digital-calculator-rust.vercel.app/",
        image: digical,
        Description: "JavaScript calculator is a web-based tool that performs basic mathematical operations. Here's a concise overview: It has features of Addition, subtraction, multiplication, and division operations. Decimal support, Clear button to reset calculations",
        language: "JavaScript",
        featured: true,
    },
    {
        id: 6,      
        name: "ToDoList-JS",
        codelink: "https://github.com/iamdeepak123/Mytodolist-project",
        projectlink: "https://my-todolist-project.vercel.app/",
        image: "",
        Description: "ToDo list app built using JavaScript it has Features like Add New Task, Users can input and add new tasks to their list, Delete Task: Tasks can be removed from the list.",
        language: "JavaScript",
        featured: false,
    },
    {
        id: 7,
        name: "Client-WebHomepage",
        codelink: "https://github.com/iamdeepak123/webhomepage",
        projectlink: "https://webhomepage.vercel.app/",
        image: "",
        Description: "This is Web Homepage for one of my client this is not fully resposive as it was not asked by the client. it was made using jquery and Basic Javascript HTML,CSS",
        language: "jQuery",
        featured: false,
    },
    {
        id: 8,
        name: "Clock",
        codelink: "https://github.com/iamdeepak123/digital_analog_clock",
        projectlink: "https://digital-analog-clock-seven.vercel.app/",
        image: "https://www.google.com/search?q=images&sca_esv=045202e8b9d90fc1&sca_upv=1&sxsrf=ADLYWILaRjo8fHJKty60vJqPLZibVObjyQ:1722073660048&udm=2&source=iu&ictx=1&vet=1&fir=B_ypq20yGKrazM%252C6dhDHhJGcmvL6M%252C%252Fm%252F0jg24%253BsKMM4eBjWSQEBM%252CB51x0PBR9KNzvM%252C_%253BtYmxDgFq4MrkJM%252C-t22bY2ix3gHaM%252C_%253B_hvsmLnL5x5NVM%252Cu1zAUGNbMI4p2M%252C_%253BkLMvIwVUZfbeMM%252CLHNlCfmH1SFk3M%252C_%253Bm57Fdarda7KehM%252CBa_eiczVaD9-zM%252C_&usg=AI4_-kRqB4SxZPrBBq9keEa7WDv5D8v_zg&sa=X&ved=2ahUKEwiC4qKm-MaHAxUCrlYBHZXdMmUQ_B16BAgyEAE#vhid=B_ypq20yGKrazM&vssid=mosaic",
        Description: "Digital/Analog watch using Javascript,HTML,CSS",
        language: "JavScript",
        featured: false,
    },


]

export default data