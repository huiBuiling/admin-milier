import React,{Component} from 'react'
import { Icon } from 'antd';

/**
 * 底部音乐
 */
export default class PlayerBar extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { list, current, isPlay, pause, play, prev, next } = this.props;
		const currentMusic = list[current];
		return (
			<div className="lee-rbb-all">
				<div className="lee-music-bar">
                    <div className="lee-image-item">
                        <img src={require(`../../../assert/images/img/${currentMusic.url}.jpg`)} alt=""/>
                        <div className="lee-music">
                            <audio
                                // controls   //显示原始样式
                                src={currentMusic.musicUrl}
                                ref='audio'
                                preload="true"
                                className="lee-music-audio"
                            />
                            <div className="lee-music-l">
                                <div className="lee-music-l-top">
                                    {/*歌名*/}
                                    <h4>{currentMusic.title}</h4>
                                </div>
                                <div className="lee-music-l-bot">
                                    <Icon
                                        type="caret-left"
                                        theme="outlined"
                                        className={current == 0 ? 'prev-no':null}
                                        onClick={prev}
                                    />

                                    {/*播放|暂停*/}
                                    {isPlay ?
                                        <Icon type="pause-circle" theme="outlined" onClick={pause}/>
                                        :
                                        <Icon type="play-circle" theme="outlined" onClick={play}/>
                                    }


                                    <Icon
                                        type="caret-right"
                                        theme="outlined"
                                        className={current == (list.length - 1)? 'next-no':null}
                                        onClick={next}
                                    />
                                </div>
                            </div>

                            <div className="lee-music-r">
                                <Icon type="heart" theme={currentMusic.collect ? 'twoTone' : null} twoToneColor="rgba(205,41,41,.95)" />
                            </div>
                        </div>
                    </div>
				</div>
			</div>
			)
	}
}
