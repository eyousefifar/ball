import { observable, action} from 'mobx';

export default class reservesStore {
  // observables
  public lastReserve = {
    id : 2,
    SportType : 'Basketball',
    providerType : 'مجموعه ورزشی',
    providerTitle : 'مجموعه ورزشی انقلاب',
    address : 'تهران ، خیابان ولیعصر ، ابتدای اتوبان نیایش ، مجموعه فرهنگی ورزشی انقلاب',
    date : '۱۳۹۷/۱۰/۲۱',
    time : '۱۰:۲۲'
  }
  public reservesList = [
      {
        id : 2,
        SportType : 'Basketball',
        providerTitle : 'مجموعه ورزشی انقلاب',
        address : 'تهران ، خیابان ولیعصر ، ابتدای اتوبان نیایش ، مجموعه فرهنگی ورزشی انقلاب',
        date : '۱۳۹۷/۱۰/۲۱',
        time : '۱۰:۲۲'
      },
      {
        id : 3,
        SportType : 'Basketball',
        providerTitle : 'مجموعه ورزشی انقلاب',
        address : 'تهران ، خیابان ولیعصر ، ابتدای اتوبان نیایش ، مجموعه فرهنگی ورزشی انقلاب',
        date : '۱۳۹۷/۱۰/۲۱',
        time : '۱۰:۲۲'
      },
      {
        id : 4,
        SportType : 'Basketball',
        providerTitle : 'مجموعه ورزشی انقلاب',
        address : 'تهران ، خیابان ولیعصر ، ابتدای اتوبان نیایش ، مجموعه فرهنگی ورزشی انقلاب',
        date : '۱۳۹۷/۱۰/۲۱',
        time : '۱۰:۲۲'
      },
      {
        id : 6,
        SportType : 'Bowling',
        providerTitle : 'مجموعه ورزشی انقلاب',
        address : 'تهران ، خیابان ولیعصر ، ابتدای اتوبان نیایش ، مجموعه فرهنگی ورزشی انقلاب',
        date : '۱۳۹۷/۱۰/۲۱',
        time : '۱۰:۲۲'
      },
      {
        id : 8,
        SportType : 'Soccer',
        providerTitle : 'مجموعه ورزشی انقلاب',
        address : 'تهران ، خیابان ولیعصر ، ابتدای اتوبان نیایش ، مجموعه فرهنگی ورزشی انقلاب',
        date : '۱۳۹۷/۱۰/۲۱',
        time : '۱۰:۲۲'
      },
      {
        id : 10,
        SportType : 'Bowling',
        providerTitle : 'مجموعه ورزشی انقلاب',
        address : 'تهران ، خیابان ولیعصر ، ابتدای اتوبان نیایش ، مجموعه فرهنگی ورزشی انقلاب',
        date : '۱۳۹۷/۱۰/۲۱',
        time : '۱۰:۲۲'
      },
      {
        id : 12,
        SportType : 'Pool',
        providerTitle : 'مجموعه ورزشی انقلاب',
        address : 'تهران ، خیابان ولیعصر ، ابتدای اتوبان نیایش ، مجموعه فرهنگی ورزشی انقلاب',
        date : '۱۳۹۷/۱۰/۲۱',
        time : '۱۰:۲۲'
      },
  ];

  public cardExpanded : number = -1;
  // actions
  public setCardExpanded = (index : number) =>{
    if(index == this.cardExpanded){
      this.cardExpanded = -1;
    }else{
      this.cardExpanded = index;
    }
  }
}
