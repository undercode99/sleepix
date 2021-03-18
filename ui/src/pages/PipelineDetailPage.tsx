import Content from "../components/organism/Content"
import PipelineFlow from "components/molecule/reacflow/PipelineFlow"
import { useState, useEffect, useCallback } from 'react';
import localforage from 'localforage'

localforage.config({
  name: 'react-flow-docs',
  storeName: 'flows',
});

const flowKey = 'example-flow';

function PipelineDetailPage(): JSX.Element {
  const json_data = '[{"id":"1","data":{"label":"Start"},"sourcePosition":"right","position":{"x":260,"y":255},"type":"input","style":{"border":"1px solid #27ae60","padding":"20px","borderRadius":"100%","background":"#27ae60","color":"white","width":"80px"}}]'
  let [elements, setElements] = useState(JSON.parse(json_data))

  const onLoad = useCallback(() => {
    const json_data = '[{"id":"1","data":{"label":"Start"},"sourcePosition":"right","position":{"x":260,"y":255},"type":"input","style":{"border":"1px solid #27ae60","background":"#27ae60","color":"white"},"isDraggable":false},{"type":"default","sourcePosition":"right","targetPosition":"left","id":"randomnode_1615640969899","data":{"label":"SSH Commands"},"animated":true,"style":{"border":"0.5px solid #ccc","color":"#777"},"position":{"x":623.5720824976516,"y":216.54819884605095}},{"source":"1","sourceHandle":null,"target":"randomnode_1615640969899","targetHandle":null,"type":"smoothstep","arrowHeadType":"arrowclosed","animated":true,"id":"reactflow__edge-1null-randomnode_1615640969899null"}]'
    const obj = JSON.parse(json_data);
    setElements(obj)
  }, [setElements]);

  // let Initial = () => {
  // setElements(JSON.parse(json_data))
  // const obj = JSON.parse(json_data);
  // }

  // const restoreFlow = async () => {
  //   const flow: any = await localforage.getItem(flowKey);
  //   if(flow){
  //     setElements(flow.elements)
  //     console.log(JSON.stringify(flow.elements))
  //   }
  // }
  return (
    <Content>
      <PipelineFlow elements={elements} />
      <button onClick={onLoad}>x</button>
    </Content>
  );
}

export default PipelineDetailPage;
