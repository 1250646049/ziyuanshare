import {ElButton,ElCol,ElRow,ElInput,ElCarousel,ElCarouselItem,
ElCard,ElTag,ElImage,ElSkeleton,ElAvatar,ElDivider,ElDrawer,ElTable,ElTableColumn
} from "element-plus";



export default {
    install(app){
        app.use(ElButton).use(ElCol).use(ElRow)
        .use(ElInput).use(ElCarousel).use(ElCarouselItem)
        .use(ElCard).use(ElTag).use(ElImage).use(ElSkeleton)
        .use(ElAvatar).use(ElDivider).use(ElDrawer).use(ElTable).use(ElTableColumn)
        ;
    }
}







