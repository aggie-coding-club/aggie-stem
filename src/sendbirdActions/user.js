import SendBird from 'sendbird';

const APP_ID = 'BFF5C526-F49D-4C35-B815-2AED2E9B9269';

export const sbConnect = (userId, nickname) => {
	return new Promise((resolve, reject) => {
		const sb = new SendBird({ 'appId': APP_ID });
		sb.connect(userId, (user, error) => {
			if (error) {
				reject('SendBird Login Failed.');
			}
			else {
				sb.updateCurrentUserInfo(nickname, null, (user, error) => {
					if (error) {
						reject('Update User Failed.');
					}
					else {
						resolve(user);
					}
				})
			}
		})
	})
};

export const sbDisconnect = () => {
	return new Promise((resolve, reject) => {
		const sb = SendBird.getInstance();
		if (sb) {
			sb.disconnect(() => {
				resolve(null);
			});
		}
		else {
			resolve(null);
		}
	})
}

export const sbUpdateProfile = (nickname) => {
	return new Promise((resolve, reject) => {
		if(!nickname) {
			reject('Nikcname is required.');
			return;
		}
		const sb = SendBird.getInstance();
		sb.updateCurrentUserInfo(nickname, null, (user,error) => {
			if (error) {
				reject('Update profile failed.')
			}
			else {
				resolve(user);
			}
		})
	})
}

export const sbGetCurrentInfo = () => {
	const sb = SendBird.getInstance();
	return {
		profileUrl: sb.currentUser.profileUrl,
		nickname: sb.currentUser.nickname
	}
}
