export const getUsers = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Leonardo Pache',
            website: 'github.com/leonardopache',
        },
        trackingProperties,
    };

    source.postMessage(messageResponse, '*');
};
