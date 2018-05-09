import SendBird from 'sendbird';

export const sbCreateOpenChannelListQuery = () => {
	const sb = SendBird.getInstance();
	return sb.OpenChannel.createOpenChannelListQuery();
}

export const sbGetOpenChannelList = (openChannelListQuery) => {
	return new Promise((resolve, reject) => {
		openChannelListQuery.next((channels, error) => {
			if (error) {
				reject(error);
			}
			else {
				resolve(channels);
			}
		});
	});
}

export const sbGetOpenChannel = (channelUrl) => {
	return new Promise((resolve, reject) => {
		const sb = SendBird.getInstance();
		sb.OpenChannel.getChannel(channelUrl, (channel, error) => {
			if(error) {
				console.log('you dumbass');
				reject(error);
			}
			else {
				console.log('get channel success!');
				resolve(channel);
			}
		});
	});
}

export const sbOpenChannelEnter = (channel) => {
	return new Promise((resolve, reject) => {
		channel.enter( (response, error) => {
			if(error) {
				console.log('ruh roh we didnt enter correctly');
                reject(error);
            } else {
				console.log('it vas a success to enter');
			}
		});
	});
}

export const sbOpenChannelExit = (channel) => {
	return new Promise((resolve, reject) => {
		channel.exit( (response, error) => {
			if(error) {
                console.log('vat da ful');
                reject(error);
            } else {
				console.log('we did it!')
			}
		});
	});
}
