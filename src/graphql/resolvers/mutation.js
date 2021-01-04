import Message from '../../models/message';
const Mutation = {
    create: async (_, { name, email, age, address,phone }) => {
        const newMessage = new Message({ name, email, age, address,phone  });
        return await newMessage.save();
    },
    update: async (_, { id, name, email,age ,address , phone }) => {
        return await Message.findByIdAndUpdate(id, {name, email,age ,address , phone });
    },
    delete: async (_, { id }) => {
        return await Message.findByIdAndDelete(id);
    }

}

export default Mutation;