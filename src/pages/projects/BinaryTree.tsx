import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, RefreshCw, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    x: number;
    y: number;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = 0;
        this.y = 0;
    }
}

const BinaryTree = () => {
    const [root, setRoot] = useState<TreeNode | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [traversalResult, setTraversalResult] = useState<number[]>([]);
    const [isTraversing, setIsTraversing] = useState(false);
    const [activeNode, setActiveNode] = useState<number | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const insertNode = (value: number) => {
        const newNode = new TreeNode(value);
        if (!root) {
            setRoot(newNode);
        } else {
            insertNodeRecursive(root, newNode);
            setRoot({ ...root }); // Trigger re-render
        }
    };

    const insertNodeRecursive = (node: TreeNode, newNode: TreeNode) => {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNodeRecursive(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNodeRecursive(node.right, newNode);
            }
        }
    };

    const handleInsert = (e: React.FormEvent) => {
        e.preventDefault();
        const val = parseInt(inputValue);
        if (!isNaN(val)) {
            insertNode(val);
            setInputValue('');
        }
    };

    const resetTree = () => {
        setRoot(null);
        setTraversalResult([]);
        setActiveNode(null);
    };

    // Traversal Algorithms
    const traverse = async (type: 'inorder' | 'preorder' | 'postorder') => {
        if (isTraversing || !root) return;
        setIsTraversing(true);
        setTraversalResult([]);

        const result: number[] = [];

        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const visit = async (node: TreeNode | null) => {
            if (!node) return;

            if (type === 'preorder') {
                setActiveNode(node.value);
                result.push(node.value);
                setTraversalResult([...result]);
                await sleep(800);
            }

            await visit(node.left);

            if (type === 'inorder') {
                setActiveNode(node.value);
                result.push(node.value);
                setTraversalResult([...result]);
                await sleep(800);
            }

            await visit(node.right);

            if (type === 'postorder') {
                setActiveNode(node.value);
                result.push(node.value);
                setTraversalResult([...result]);
                await sleep(800);
            }
        };

        await visit(root);
        setActiveNode(null);
        setIsTraversing(false);
    };

    // Drawing Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!root) return;

        // Calculate positions
        const calculatePositions = (node: TreeNode, x: number, y: number, level: number) => {
            node.x = x;
            node.y = y;
            const spread = 200 / (level + 1);

            if (node.left) calculatePositions(node.left, x - spread, y + 60, level + 1);
            if (node.right) calculatePositions(node.right, x + spread, y + 60, level + 1);
        };

        calculatePositions(root, canvas.width / 2, 50, 1);

        // Draw edges
        const drawEdges = (node: TreeNode) => {
            if (node.left) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(node.left.x, node.left.y);
                ctx.strokeStyle = '#cbd5e1';
                ctx.lineWidth = 2;
                ctx.stroke();
                drawEdges(node.left);
            }
            if (node.right) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(node.right.x, node.right.y);
                ctx.strokeStyle = '#cbd5e1';
                ctx.lineWidth = 2;
                ctx.stroke();
                drawEdges(node.right);
            }
        };

        drawEdges(root);

        // Draw nodes
        const drawNodes = (node: TreeNode) => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = node.value === activeNode ? '#facc15' : '#3b82f6';
            ctx.fill();
            ctx.strokeStyle = '#1e40af';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(node.value.toString(), node.x, node.y);

            if (node.left) drawNodes(node.left);
            if (node.right) drawNodes(node.right);
        };

        drawNodes(root);

    }, [root, activeNode]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            <nav className="bg-white shadow-sm p-4">
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors inline-block">
                        <ArrowLeft className="h-5 w-5 mr-1" />
                        Back to Portfolio
                    </Link>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Binary Tree Visualizer</h1>
                    <p className="text-gray-600">Insert numbers to build a tree, then visualize traversal algorithms.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Controls */}
                    <div className="bg-white p-6 rounded-xl shadow-md h-fit">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <Plus className="h-5 w-5 mr-2 text-indigo-600" />
                            Controls
                        </h2>

                        <form onSubmit={handleInsert} className="mb-6">
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Enter number"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                                >
                                    Insert
                                </button>
                            </div>
                        </form>

                        <div className="space-y-3">
                            <p className="font-medium text-gray-700 mb-2">Traversals:</p>
                            <button
                                onClick={() => traverse('inorder')}
                                disabled={isTraversing || !root}
                                className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Play className="h-4 w-4 mr-2 text-green-600" /> In-Order (Left, Root, Right)
                            </button>
                            <button
                                onClick={() => traverse('preorder')}
                                disabled={isTraversing || !root}
                                className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Play className="h-4 w-4 mr-2 text-blue-600" /> Pre-Order (Root, Left, Right)
                            </button>
                            <button
                                onClick={() => traverse('postorder')}
                                disabled={isTraversing || !root}
                                className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Play className="h-4 w-4 mr-2 text-purple-600" /> Post-Order (Left, Right, Root)
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <button
                                onClick={resetTree}
                                className="w-full flex items-center justify-center px-4 py-2 text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
                            >
                                <RefreshCw className="h-4 w-4 mr-2" /> Reset Tree
                            </button>
                        </div>
                    </div>

                    {/* Visualization Area */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                        <div className="w-full flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Visualization</h2>
                            {traversalResult.length > 0 && (
                                <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                                    Result: <span className="font-mono font-bold text-indigo-600">{traversalResult.join(' → ')}</span>
                                </div>
                            )}
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-slate-50 w-full flex justify-center">
                            <canvas
                                ref={canvasRef}
                                width={600}
                                height={400}
                                className="max-w-full"
                            />
                        </div>

                        <div className="mt-4 text-sm text-gray-500 text-center">
                            <p>Blue nodes are inactive. Yellow node is currently being visited.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BinaryTree;
