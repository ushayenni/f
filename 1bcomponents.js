import React, { useState } from "react";

function Child({ user, onMessageSend }) {
return (
<div style={styles.childBox}>
<h3>Child Component</h3>
<p>
Received user: <strong>{user.name}</strong> ({user.email})
</p>
<button
onClick={() =>
onMessageSend("Hello Parent! This is a message from Child.")
}
>
Send Message to Parent
</button>
</div>
);
}

function Parent() {
const [user] = useState({
name: "Learner",

email: "learner@gmail.com",
});

const [messageFromChild, setMessageFromChild] = useState("");

const handleChildMessage = (msg) => {
setMessageFromChild(msg);
};

return (
<div style={styles.parentBox}>
<h2>Parent Component</h2>
<p>User info is shared with Child component below:</p>
<Child user={user} onMessageSend={handleChildMessage} />

{messageFromChild && (
<p style={{ marginTop: "20px" }}>
<strong>Message from Child:</strong> {messageFromChild}
</p>
)}
</div>
);
}

const styles = {
parentBox: {
border: "2px solid blue",
padding: "20px",

margin: "20px",
borderRadius: "10px",
},
childBox: {
border: "2px solid green",
padding: "15px",
marginTop: "15px",
borderRadius: "10px",
},
};

export default Parent ;
//npm start

