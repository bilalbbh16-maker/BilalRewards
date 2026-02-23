// المهام + Smart Links
const tasksContainer = document.getElementById("tasks-container");
const tasks = [
    {title:"Visit Website A", reward:0.004, link:"#"},
    {title:"Join Telegram Channel", reward:0.005, link:"#"}
];
tasks.forEach(task=>{
    const div = document.createElement("div");
    div.innerHTML = `<p>${task.title} - Reward: $${task.reward} <a href="${task.link}" target="_blank">Go</a></p>`;
    tasksContainer.appendChild(div);
});
