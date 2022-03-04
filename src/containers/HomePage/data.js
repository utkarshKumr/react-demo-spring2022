const data = {
    name: 'What is Lorem Ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lor",
    hobbies: [
        'Contrary to popular belief, Lorem Ipsum is not simply random text',
        'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,'
    ],
};

export const loadData = async (callback) => {
    return setTimeout(() => {
        callback(data);
    },1000)
}
// export default data;