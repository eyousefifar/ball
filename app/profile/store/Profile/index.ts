import ProfileStore from './Profile';
import { observable, action, computed, decorate } from 'mobx';

decorate(ProfileStore, {
  Email: observable,
  Phone: observable,
  FullName: observable,
  ProfileImage : observable,
  ProfileHeaderImage : observable,
  FavoriteList : observable,
  isEmail: computed,
  isPhone: computed,
  setEmail: action,
  setPhone: action,
  setFullName: action,
});
const store = new ProfileStore();
export default store;
