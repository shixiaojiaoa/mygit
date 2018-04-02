/**
 * Created by Administrator on 2018/3/20.
 */
requirejs.config({
    path:{
        jquery:"jquery-3.3.1"
    }
});
define(['jquery'],function ($) {
    //返回一个类
    function Dialog() {
        this.defaultSettings = {
            width:500,
            height:400,
            title:"弹出层",
            content:""
        };
        this.$container=$('<div class="dialog-container"></div>');
        this.$mask=$('<div class="dialog-mask"></div>');
        this.$box=$('<div class="dialog-box"></div>');
        this.$title=$('<div class="dialog-title"></div>');
        this.$item=$('<div class="dialog-item">'+this.defaultSettings.title+'</div>');
        this.$close=$('<div class="dialog-close">[x]</div>');
        this.$content=$('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open =function (settings) {
        $.extend(this.defaultSettings, settings);
        this.$title.append(this.$item).append(this.$close);
        this.$box.append(this.$title).append(this.$content).css(
            {
                width:this.defaultSettings.width,
                height:this.defaultSettings.height
            }
        );
        this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
        this.$item.text(this.defaultSettings.title);
        if(this.defaultSettings.content.indexOf(".html")!=-1){
            this.$content.load(this.defaultSettings.content);
        }else {
            this.$content.html(this.defaultSettings.content);
        }
        this.$close.on("click",function () {
            this.close();
        }.bind(this));
    };
    Dialog.prototype.close =function(){
        this.$container.remove();
    };
    return Dialog;
});