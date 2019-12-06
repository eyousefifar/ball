import {Navigation} from 'react-native-navigation';
import Wallet from '../screen/Wallet';
import Transactions from "../screen/Transactions";
import IncreaseCashOverlay from '../components/IncreaseCashOverlay';
import {
	dismissModal, push, pop, screens, showOverlay, dismissOverlay, showModal
} from '../../ball-library';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import PaymentWeb from "../screen/PaymentWeb";


export const registerWalletScreen = () => {

	Navigation.registerComponent(screens.wallet.id, () =>
			gestureHandlerRootHOC(Wallet)
	);

	Navigation.registerComponent(screens.increaseCash.id, () =>
			gestureHandlerRootHOC(IncreaseCashOverlay)
	);

	Navigation.registerComponent(screens.walletTransactions.id, () =>
			gestureHandlerRootHOC(Transactions)
	);

	Navigation.registerComponent(screens.payment.id, () =>
		gestureHandlerRootHOC(PaymentWeb)
	);
};




export const showIncreaseCashOverlay = async () => {
	await showOverlay({
		...screens.increaseCash
	});
};

export const dismissWalletScreen = async () => {
	await dismissModal(screens.wallet.id);
};

export const dismissIncreaseCashOverlay = async () => {
	await dismissOverlay(screens.increaseCash.id);
};

export const showTransactions = async (walletId:string) => {
	await push({
		startId: screens.wallet.id,
		toScreenId: screens.walletTransactions.id,
		auth: screens.walletTransactions.auth,
		passProps:{
			walletId:walletId
		}
	});
};

export const dismissTransactionScreen = async () => {
	await pop(screens.walletTransactions.id);
};

export const showPaymentModal = async (paymentUrl:string) => {
	await showModal({
		...screens.payment,
		passProps:{
			paymentUrl:paymentUrl
		}
	});
};
