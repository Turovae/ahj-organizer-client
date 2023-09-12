const URL = process.env.PUBLIC_URL;
// console.log(URL);
// console.log(process.env);

let messages: Array<{
  id: number
  title: string
  content: string | File
  timestamp: number
  isUser: boolean
}> = [
  {
    id: 1,
    isUser: true,
    title: 'Message 1',
    content: 'content message 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sunt saepe deleniti animi repellendus, iusto, earum minus veniam officia, autem tempore nostrum beatae aspernatur totam id atque eum ea blanditiis.',
    timestamp: 1001
  },
  {
    id: 2,
    isUser: false,
    title: 'Message 2',
    content: 'content message 2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sunt saepe deleniti animi repellendus, iusto, earum minus veniam officia, autem tempore nostrum beatae aspernatur totam id atque eum ea blanditiis.',
    timestamp: 1005
  },
  {
    id: 3,
    isUser: true,
    title: 'Message 3',
    content: 'content message 3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sunt saepe deleniti animi repellendus, iusto, earum minus veniam officia, autem tempore nostrum beatae aspernatur totam id atque eum ea blanditiis.',
    timestamp: 1010
  },
  {
    id: 4,
    isUser: false,
    title: 'Message 4',
    content: 'content message 4: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi obcaecati odio totam, reprehenderit optio veritatis, ab vitae hic minus sed atque quaerat eos consequuntur aspernatur, ut quibusdam ipsum molestias culpa.',
    timestamp: 1015
  },
  {
    id: 5,
    isUser: true,
    title: 'Message 5',
    content: 'content message 5: https://google.com Lorem ipsum dolor sit amet consectetur https://google.com adipisicing elit. https://yandex.ru Error rerum optio omnis veniam quasi repudiandae tenetur magni at voluptates debitis perferendis ipsum, alias voluptatem recusandae sunt iusto nisi, explicabo ullam?',
    timestamp: 1020
  }
]

let nextId = 6;

interface MessageProps {
  id: number
  title: string
  content: string | File
  timestamp: number
  isUser: boolean
}

export async function getMessages (): Promise<MessageProps[] | []> {
  const response = await fetch(`${URL}/posts`);
  // console.log(response);
  if (response.ok) {
    // console.log(response.body)
    const data = await response.json();

    // console.log(data);
    return data;
  }
  return [];
}

// export function addMessage (message: { content: string | File }): MessageProps[] {
//   let data;

//   async function fetcher (): Promise<null> {
//     const response = await fetch(`${URL}/posts`, {
//       method: 'POST',
//       body: message.content
//     })

//     if (response.ok) {
//       data = await response.json();
//       // console.log(data);
//     }

//     return null
//   }

//   // console.log(message);

//   void fetcher();

//   return null;
// }
