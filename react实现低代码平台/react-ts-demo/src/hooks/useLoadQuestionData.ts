import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { useDispatch } from "react-redux";
import { getQuestionService } from "../services/question";
import {
  ComponentsInfoType,
  resetComponents,
} from "../store/componentsReducer";
import { resetPageInfo } from "../store/pageInfoReducer";

function useLoadQuestionData() {
  const { id = "" } = useParams();
  const dispatch = useDispatch();

  // ajax 加载
  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error("没有问卷 id");
      return await getQuestionService(id);
    },
    {
      manual: true,
    },
  );

  // 根据获取的 data 设置 redux store
  useEffect(() => {
    if (!data) return;
    const {
      componentList = [],
      copiesComponent,
      title,
      desc,
      js,
      css,
      isPublished,
    } = data as {
      componentList: ComponentsInfoType[];
      copiesComponent: ComponentsInfoType;
      title: string;
      desc: string;
      js: string;
      css: string;
      isPublished: boolean;
    };

    let selectedId = "";
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id;
    }
    // 把 componentList 存储到 Redux store 中
    dispatch(resetComponents({ componentList, selectedId, copiesComponent }));
    dispatch(resetPageInfo({ title, desc, js, css, isPublished }));
  }, [data]);

  // 判断 id 变化，执行 ajax 加载问卷数据
  useEffect(() => {
    run(id);
  }, [id]);

  return { loading, error };
}

export default useLoadQuestionData;
