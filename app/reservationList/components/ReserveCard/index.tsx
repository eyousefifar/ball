import React from 'react';
import { Surface } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';
import { Observer } from 'mobx-react';
// local
import CollapsedCard from '../CollapsedCard';
import ExtendedCard from '../ExtendedCard';
import ClosestReserve from '../ClosestReserve';
// styles
import UIClass from './UI';
import { reserveCardStyle as styleGenerator } from './styles';

// types
import { reserveCardProps } from './types';
class ReserveCard extends React.Component<reserveCardProps> {
  private UI = new UIClass();
  private toggleCard = () => {
    this.UI.expanded ? this.UI.closeCard() : this.UI.expandCard();
  };
  private styles = styleGenerator();
  private renderReserveCard = () => {
    const { showQrCode } = this.props;
    const { styles, rippleColor } = this.styles;
    return (
      <Observer>
        {() => (
          <Surface
            style={[
              styles.container,
              this.UI.expanded ? styles.expanded : styles.collapsed
            ]}
          >
            <RectButton
              style={{ flex: 1 }}
              onPress={this.toggleCard}
              rippleColor={rippleColor}
            >
              <CollapsedCard
                providerTitle={'asd'}
                providerType={'sportHall'}
                qrCodeValue={'sdsad'}
                reserveDate={'1397:12'}
                reserveTime={'15:54'}
                iconRotation={this.UI.rotateArrow}
                onPress={this.UI.expandCard}
                showArrow
                showQrCode={showQrCode}
              />
              {this.UI.expanded && (
                <ExtendedCard
                  address={'sdasd'}
                  canBeCanceled
                  location={{
                    lat: 32432,
                    long: 5454
                  }}
                />
              )}
            </RectButton>
          </Surface>
        )}
      </Observer>
    );
  };
  public render() {
    const { closest, showQrCode } = this.props;

    if (closest) {
      return (
        <Observer>{() => <ClosestReserve showQrCode={showQrCode} />}</Observer>
      );
    } else {
      return this.renderReserveCard();
    }
  }
}

export default ReserveCard;
