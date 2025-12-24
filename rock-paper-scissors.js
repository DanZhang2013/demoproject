// 剪刀石头布游戏 (Rock-Paper-Scissors Game)

// 游戏选项
const ROCK = '石头';
const PAPER = '布';
const SCISSORS = '剪刀';

const choices = [ROCK, PAPER, SCISSORS];

/**
 * 获取电脑的随机选择
 * @returns {string} 电脑的选择：石头、布或剪刀
 */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * 判断游戏结果
 * @param {string} playerChoice - 玩家的选择
 * @param {string} computerChoice - 电脑的选择
 * @returns {string} 游戏结果：赢、输或平局
 */
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return '平局';
    }
    
    if (
        (playerChoice === ROCK && computerChoice === SCISSORS) ||
        (playerChoice === PAPER && computerChoice === ROCK) ||
        (playerChoice === SCISSORS && computerChoice === PAPER)
    ) {
        return '玩家赢';
    }
    
    return '电脑赢';
}

/**
 * 玩一轮游戏
 * @param {string} playerChoice - 玩家的选择
 * @returns {object} 包含玩家选择、电脑选择和结果的对象
 */
function playGame(playerChoice) {
    // 验证玩家输入
    if (!choices.includes(playerChoice)) {
        return {
            error: `无效的选择！请选择 ${choices.join('、')} 中的一个`
        };
    }
    
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    return {
        playerChoice,
        computerChoice,
        result
    };
}

/**
 * 打印游戏结果
 * @param {object} gameResult - 游戏结果对象
 */
function printGameResult(gameResult) {
    if (gameResult.error) {
        console.log(gameResult.error);
        return;
    }
    
    console.log('==================');
    console.log('剪刀石头布游戏结果');
    console.log('==================');
    console.log(`玩家选择：${gameResult.playerChoice}`);
    console.log(`电脑选择：${gameResult.computerChoice}`);
    console.log(`结果：${gameResult.result}`);
    console.log('==================');
}

// 导出函数供其他模块使用
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        ROCK,
        PAPER,
        SCISSORS,
        getComputerChoice,
        determineWinner,
        playGame,
        printGameResult
    };
}

// 示例用法
if (typeof require !== 'undefined' && require.main === module) {
    console.log('欢迎来到剪刀石头布游戏！');
    console.log('可选择：石头、布、剪刀');
    console.log('');
    
    // 示例游戏
    const examples = [ROCK, PAPER, SCISSORS];
    examples.forEach(choice => {
        const result = playGame(choice);
        printGameResult(result);
        console.log('');
    });
}
