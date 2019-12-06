import { LayoutAnimation } from 'react-native';
let chunk = require('lodash.chunk');

export default class ProfileStore {
  TestFavorite : Array<object> = [
    {
      id : 2,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 3,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 4,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 6,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 7,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 8,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 9,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 10,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 11,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 12,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 13,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    },
    {
      id : 14,
      providerTitle : 'مجموعه ورزشی انقلاب',
      image : require('../../assets/gym.jpg'),
      address : 'ولیعصر'
    }
  ];
  // attributes

  private emailRegex: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  private phoneRegex: RegExp = /^\(?([0]{1})\)?[-. ]?([9]{1})[-. ]?[-. ]?([0-9]{2})[-. ]?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  // observables
  public Email: string = 'example@gmail.com';
  public Phone: string = '۰۹۱۲۳۴۵۶۷۸۹';
  public isOtp_inputing : boolean = false;  //for change phone edite to enter otp
  public FullName: string = 'اشکان شجاعی';
  public ProfileImage : any = require('../../assets/pro.jpg');
  public ProfileHeaderImage : any = require('../../assets/football.jpg');
  public FavoriteList : Array<Array<object>> = chunk(this.TestFavorite,2);
  // computed
  public get isEmail(): boolean {
    return this.emailRegex.test(this.Email);
  }
  public get isPhone(): boolean {
    return this.phoneRegex.test(this.Phone);
  }
  // actions
  public ChangePhone_State = () =>{
    this.isOtp_inputing = !this.isOtp_inputing;
  }

  public setEmail = (text: string): void => {
    this.Email = text;
  };
  public setPhone = (text: string): void => {
    this.Phone = text;
  };
  public setFullName = (text: string): void => {
    this.FullName = text;
  };
}
